const { execFile } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.join(__dirname, 'public', 'scroll_video.mp4');
const framesDir = path.join(__dirname, 'public', 'frames');

// Ensure frames directory exists
if (!fs.existsSync(framesDir)) {
  fs.mkdirSync(framesDir, { recursive: true });
}

// Clear existing frames if any
const existingFiles = fs.readdirSync(framesDir);
for (const file of existingFiles) {
  fs.unlinkSync(path.join(framesDir, file));
}

console.log('Extracting frames from:', videoPath);
console.log('Using ffmpeg path:', ffmpeg);
console.log('Output dir:', framesDir);

const args = [
  '-i', videoPath,
  '-vcodec', 'libwebp',
  '-filter:v', 'fps=30',
  '-lossless', '0',
  '-compression_level', '6',
  '-q:v', '70',
  path.join(framesDir, 'frame_%04d.webp')
];

const child = execFile(ffmpeg, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error extracting frames:', error);
    return;
  }
  console.log('Frame extraction complete!');
  
  // Count frames
  const files = fs.readdirSync(framesDir).filter(f => f.endsWith('.webp'));
  console.log(`Generated ${files.length} frames.`);
});

child.stdout.on('data', (data) => console.log(data.toString()));
child.stderr.on('data', (data) => console.log(data.toString()));
