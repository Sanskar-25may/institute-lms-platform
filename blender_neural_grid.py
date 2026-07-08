import bpy
import random
import math

# ------------------------------------------------------------------------
# 1. SCENE CLEANUP & RENDER SETUP
# ------------------------------------------------------------------------
def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    
    scene = bpy.context.scene
    scene.render.engine = 'CYCLES' # Cycles is required for true frosted glass
    scene.cycles.samples = 128
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.fps = 60
    
    # 2 seconds at 60fps. Adjust for longer scroll duration.
    scene.frame_start = 1
    scene.frame_end = 120 

# ------------------------------------------------------------------------
# 2. WORLD LIGHTING (Midnight Blue / Deep Cinematic Dark)
# ------------------------------------------------------------------------
def setup_world():
    world = bpy.context.scene.world
    if not world:
        world = bpy.data.worlds.new("World")
        bpy.context.scene.world = world
        
    world.use_nodes = True
    bg_node = world.node_tree.nodes.get('Background')
    bg_node.inputs[0].default_value = (0.01, 0.02, 0.04, 1.0) # Deep midnight blue
    bg_node.inputs[1].default_value = 0.5 # Low intensity

# ------------------------------------------------------------------------
# 3. MATERIALS PREPARATION
# ------------------------------------------------------------------------
def create_materials():
    # Frosted Glass Material
    mat_glass = bpy.data.materials.new(name="FrostedGlass")
    mat_glass.use_nodes = True
    nodes = mat_glass.node_tree.nodes
    nodes.clear()
    
    output = nodes.new(type='ShaderNodeOutputMaterial')
    principled = nodes.new(type='ShaderNodeBsdfPrincipled')
    principled.inputs['Base Color'].default_value = (0.8, 0.8, 0.9, 1)
    principled.inputs['Roughness'].default_value = 0.15 # The "frost"
    
    # Blender 4.0+ uses 'Transmission Weight', older uses 'Transmission'
    if 'Transmission Weight' in principled.inputs:
        principled.inputs['Transmission Weight'].default_value = 0.95
    elif 'Transmission' in principled.inputs:
        principled.inputs['Transmission'].default_value = 0.95
        
    mat_glass.node_tree.links.new(principled.outputs['BSDF'], output.inputs['Surface'])

    # Glowing Neural Network Material (Cyan)
    mat_glow = bpy.data.materials.new(name="NeuralGlow")
    mat_glow.use_nodes = True
    nodes = mat_glow.node_tree.nodes
    nodes.clear()
    
    output = nodes.new(type='ShaderNodeOutputMaterial')
    emission = nodes.new(type='ShaderNodeEmission')
    emission.inputs['Color'].default_value = (0.0, 0.6, 1.0, 1.0) # Cyan
    emission.inputs['Strength'].default_value = 5.0
    
    mat_glow.node_tree.links.new(emission.outputs['Emission'], output.inputs['Surface'])
    
    return mat_glass, mat_glow

# ------------------------------------------------------------------------
# 4. PROCEDURAL GENERATION (Glass Panels & Neural Nodes)
# ------------------------------------------------------------------------
def generate_environment(mat_glass, mat_glow):
    corridor_length = 30
    corridor_width = 15
    corridor_height = 10
    
    # Generate Floating Frosted Panels
    for i in range(80):
        x = random.uniform(-corridor_width, corridor_width)
        y = random.uniform(0, corridor_length)
        z = random.uniform(-corridor_height, corridor_height)
        
        bpy.ops.mesh.primitive_plane_add(size=random.uniform(1.0, 3.5), location=(x, y, z))
        plane = bpy.context.active_object
        
        # Slight random rotations for abstract isometric feel
        plane.rotation_euler = (
            math.radians(random.choice([0, 90, 180])),
            math.radians(random.uniform(-10, 10)),
            math.radians(random.choice([0, 45, 90]))
        )
        
        plane.data.materials.append(mat_glass)
        
        # Add slight solidify modifier for glass refraction
        bpy.ops.object.modifier_add(type='SOLIDIFY')
        plane.modifiers["Solidify"].thickness = 0.05

    # Generate Glowing Data Nodes (Spheres)
    for i in range(40):
        x = random.uniform(-corridor_width + 2, corridor_width - 2)
        y = random.uniform(0, corridor_length)
        z = random.uniform(-corridor_height + 2, corridor_height - 2)
        
        bpy.ops.mesh.primitive_uv_sphere_add(radius=random.uniform(0.05, 0.15), location=(x, y, z))
        node = bpy.context.active_object
        node.data.materials.append(mat_glow)

# ------------------------------------------------------------------------
# 5. CAMERA & SCROLLMATION ANIMATION
# ------------------------------------------------------------------------
def setup_camera_and_animation():
    bpy.ops.object.camera_add(location=(0, -5, 0), rotation=(math.radians(90), 0, 0))
    cam = bpy.context.active_object
    bpy.context.scene.camera = cam
    
    # Wide angle for cinematic feel
    cam.data.lens = 24 
    
    # Keyframe 1: Start position
    cam.location = (0, -2, 0)
    cam.keyframe_insert(data_path="location", frame=1)
    
    # Keyframe 2: End position (Pushing forward seamlessly)
    cam.location = (0, 10, 0) # Adjust Y value to control speed
    cam.keyframe_insert(data_path="location", frame=120)
    
    # Make animation perfectly linear (no easing/motion blur) for scroll scrubability
    if cam.animation_data and cam.animation_data.action:
        for fcurve in cam.animation_data.action.fcurves:
            for keyframe in fcurve.keyframe_points:
                keyframe.interpolation = 'LINEAR'

# ------------------------------------------------------------------------
# EXECUTION
# ------------------------------------------------------------------------
reset_scene()
setup_world()
glass_mat, glow_mat = create_materials()
generate_environment(glass_mat, glow_mat)
setup_camera_and_animation()

print("Cinematic Neural Grid Generated Successfully.")
