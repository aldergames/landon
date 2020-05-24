var searchIndex = JSON.parse('{\
"blender_armature":{"doc":"Blender files can have armature such as circles, cubes,…","i":[[3,"CoordinateSystem","blender_armature","A coordinate system is used to make sense of coordinates.",null,null],[3,"ActionSettings","","Settings for your armature\'s current action and…",null,null],[12,"action_name","","The name of the action (animation) whose keyframes that…",0,null],[12,"start_time","","The time that this action started. By comparing…",0,null],[12,"should_loop","","Whether or not the action should loop if `current_time` -…",0,null],[3,"InterpolationSettings","","Settings for how to interpolate your BlenderArmature\'s…",null,null],[12,"current_time","","The current time will get compared to the start time of…",1,null],[12,"joint_indices","","The joints that you want to interpolate. To interpolate…",1,null],[12,"blend_fn","","Your blend_fn returns a number between `0.0` and `1.0`.…",1,null],[12,"current_action","","Settings for the current action (animation) of this…",1,null],[12,"previous_action","","Optional settings for the previous action of this…",1,null],[3,"BlenderArmature","","All of the data about a Blender armature that we\'ve…",null,null],[12,"joint_index","","",2,null],[12,"inverse_bind_poses","","",2,null],[12,"actions","","",2,null],[3,"Keyframe","","The pose bones at an individual keyframe time",null,null],[4,"Axis","","",null,null],[13,"X","","",3,null],[13,"Y","","",3,null],[13,"Z","","",3,null],[4,"Hand","","Represents the orientation of the coordinate system using…",null,null],[13,"Right","","A right handed coordinate system",4,null],[13,"Left","","A left handed coordinate system",4,null],[4,"FlattenArmatureError","","An error when trying to flatten your exported data across…",null,null],[13,"DuplicateArmatureNamesAcrossFiles","","",5,null],[12,"duplicates","blender_armature::FlattenArmatureError","",6,null],[4,"BlenderError","blender_armature","Something went wrong in the Blender child process that was…",null,null],[13,"Stderr","","Errors in Blender are written to stderr. We capture the…",7,null],[4,"Bone","","A bone in an armature. Can either be a dual quaternion or…",null,null],[13,"Matrix","","",8,null],[13,"DualQuat","","Rptation:     [w, x, y, z] Translation:  [w, x, y, z]",8,null],[5,"parse_armatures_from_blender_stdout","","Given a buffer of standard output from Blender we parse…",null,[[],["armaturesbyfilename",6]]],[5,"flatten_exported_armatures","","Convert ArmatureeshByFilename into a HashMap<ArmatureName,…",null,[[["armaturesbyfilename",6]],[["flattenarmatureerror",4],["hashmap",3],["result",4]]]],[11,"matrix_to_dual_quat","","Convert a matrix into a dual quaternion…",2,[[["bone",4]],["bone",4]]],[11,"dual_quat_to_matrix","","…",2,[[["bone",4]],["bone",4]]],[11,"new","","",9,[[["axis",4],["hand",4]]]],[11,"change_coordinate_system","","Shift around the data in the armature to a new coordinate…",2,[[["coordinatesystem",3]]]],[11,"new","","Creates new action settings for a specified action name",0,[[],["actionsettings",3]]],[11,"interpolate_bones","","Interpolate in between the keyframes of your…",2,[[["interpolationsettings",3]],[["bone",4],["btreemap",3]]]],[6,"ArmaturesByFilename","","",null,null],[6,"ArmaturesByArmatureName","","",null,null],[11,"bone_groups","","Blender [bone groups]",2,[[],["hashmap",3]]],[11,"create_bone_group","","Create a new bone group",2,[[["vec",3],["string",3]]]],[11,"new","","",10,[[["vec",3],["bone",4]]]],[11,"bones","","All of the bones for this keyframe.",10,[[],["vec",3]]],[11,"bones_mut","","All of the bones for this keyframe.",10,[[],["vec",3]]],[11,"apply_inverse_bind_poses","","Iterate over all of the action bones and apply and…",2,[[]]],[11,"transpose_actions","","Tranpose all of the bone matrices in our armature\'s action…",2,[[]]],[11,"matrices_to_dual_quats","","Convert your action matrices into dual quaternions so that…",2,[[]]],[11,"as_slice","","Get a slice representation of you bone data",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_subset","","",9,[[],["option",4]]],[11,"is_in_subset","","",9,[[]]],[11,"to_subset_unchecked","","",9,[[]]],[11,"from_subset","","",9,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_subset","","",0,[[],["option",4]]],[11,"is_in_subset","","",0,[[]]],[11,"to_subset_unchecked","","",0,[[]]],[11,"from_subset","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"to_subset","","",1,[[],["option",4]]],[11,"is_in_subset","","",1,[[]]],[11,"to_subset_unchecked","","",1,[[]]],[11,"from_subset","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"to_subset","","",2,[[],["option",4]]],[11,"is_in_subset","","",2,[[]]],[11,"to_subset_unchecked","","",2,[[]]],[11,"from_subset","","",2,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_subset","","",10,[[],["option",4]]],[11,"is_in_subset","","",10,[[]]],[11,"to_subset_unchecked","","",10,[[]]],[11,"from_subset","","",10,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"to_subset","","",3,[[],["option",4]]],[11,"is_in_subset","","",3,[[]]],[11,"to_subset_unchecked","","",3,[[]]],[11,"from_subset","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"to_subset","","",4,[[],["option",4]]],[11,"is_in_subset","","",4,[[]]],[11,"to_subset_unchecked","","",4,[[]]],[11,"from_subset","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"as_fail","","",5,[[],["fail",8]]],[11,"to_subset","","",5,[[],["option",4]]],[11,"is_in_subset","","",5,[[]]],[11,"to_subset_unchecked","","",5,[[]]],[11,"from_subset","","",5,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"as_fail","","",7,[[],["fail",8]]],[11,"to_subset","","",7,[[],["option",4]]],[11,"is_in_subset","","",7,[[]]],[11,"to_subset_unchecked","","",7,[[]]],[11,"from_subset","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_subset","","",8,[[],["option",4]]],[11,"is_in_subset","","",8,[[]]],[11,"to_subset_unchecked","","",8,[[]]],[11,"from_subset","","",8,[[]]],[11,"clone","","",9,[[],["coordinatesystem",3]]],[11,"clone","","",3,[[],["axis",4]]],[11,"clone","","",4,[[],["hand",4]]],[11,"clone","","",0,[[],["actionsettings",3]]],[11,"default","","",9,[[]]],[11,"default","","",2,[[],["blenderarmature",3]]],[11,"eq","","",9,[[["coordinatesystem",3]]]],[11,"ne","","",9,[[["coordinatesystem",3]]]],[11,"eq","","",3,[[["axis",4]]]],[11,"eq","","",4,[[["hand",4]]]],[11,"eq","","",2,[[["blenderarmature",3]]]],[11,"ne","","",2,[[["blenderarmature",3]]]],[11,"eq","","",8,[[["bone",4]]]],[11,"ne","","",8,[[["bone",4]]]],[11,"eq","","",10,[[["keyframe",3]]]],[11,"ne","","",10,[[["keyframe",3]]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"name","","",5,[[],["option",4]]],[11,"cause","","",5,[[],[["fail",8],["option",4]]]],[11,"backtrace","","",5,[[],[["option",4],["backtrace",3]]]],[11,"name","","",7,[[],["option",4]]],[11,"cause","","",7,[[],[["fail",8],["option",4]]]],[11,"backtrace","","",7,[[],[["option",4],["backtrace",3]]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]]],"p":[[3,"ActionSettings"],[3,"InterpolationSettings"],[3,"BlenderArmature"],[4,"Axis"],[4,"Hand"],[4,"FlattenArmatureError"],[13,"DuplicateArmatureNamesAcrossFiles"],[4,"BlenderError"],[4,"Bone"],[3,"CoordinateSystem"],[3,"Keyframe"]]},\
"blender_mesh":{"doc":"Blender files can have meshes such as circles, cubes,…","i":[[3,"CreateSingleIndexConfig","blender_mesh","Configuration for combining multiple indices into a single…",null,null],[12,"bone_influences_per_vertex","","The number of bones that influence each vertex.",0,null],[12,"calculate_face_tangents","","Whether or not to calculate the tangents for each vertex.",0,null],[3,"BoundingBox","","The bounding box that encompasses a mesh. This will…",null,null],[12,"min_corner","","The corner with the lowest x, y and z values",1,null],[12,"max_corner","","The corner with the greatest x, y and z values",1,null],[3,"PrincipledBSDF","","Material data for a mesh",null,null],[3,"MultiIndexedVertexAttributes","","Vertex data with multiple indices - not suited for OpenGL…",null,null],[3,"SingleIndexedVertexAttributes","","Most 3D model file formats export vertex data with…",null,null],[3,"BlenderMesh","","All of the data about a mesh",null,null],[4,"FlattenMeshError","","An error when trying to flatten your exported data across…",null,null],[13,"DuplicateMeshNamesAcrossFiles","","",2,null],[12,"duplicates","blender_mesh::FlattenMeshError","",3,null],[4,"Channel","blender_mesh","An individual channel within an image. Red, Green, or Blue.",null,null],[13,"Red","","",4,null],[13,"Green","","",4,null],[13,"Blue","","",4,null],[4,"MaterialInput","","An input to a material property.",null,null],[13,"Uniform","","Some value that is uniform across all vertices / fragments…",5,null],[13,"ImageTexture","","The name of the texture image (excluding the full path)…",5,null],[4,"BlenderError","","Something went wrong in the Blender child process that was…",null,null],[13,"Stderr","","Errors in Blender are written to stderr. We capture the…",6,null],[5,"parse_meshes_from_blender_stdout","","Given a buffer of standard output from Blender we parse…",null,[[],["meshesbyfilename",6]]],[5,"flatten_exported_meshes_owned","","Convert MesheshByFilename into a HashMap<MeshName,…",null,[[["meshesbyfilename",6]],[["result",4],["hashmap",3],["flattenmesherror",4]]]],[5,"flatten_exported_meshes","","Convert MesheshByFilename into a HashMap<MeshName,…",null,[[["meshesbyfilename",6]],[["result",4],["hashmap",3],["flattenmesherror",4]]]],[11,"face_weight_normals","","Alter normals to be both surface weighted (connected…",7,[[],[["result",4],["weightednormalserror",4]]]],[11,"combine_vertex_indices","","We store our exported Blender mesh with indices for…",8,[[["createsingleindexconfig",3]],["singleindexedvertexattributes",3]]],[11,"interleave_vertex_data","","",8,[[],["vec",3]]],[11,"base_color","","The base_color of the material.",9,[[],["materialinput",4]]],[11,"roughness","","The roughness of the material.",9,[[],["materialinput",4]]],[11,"metallic","","How metallic the material is. Most materials should be 0.0…",9,[[],["materialinput",4]]],[11,"normal_map","","The normal map",9,[[],[["string",3],["option",4]]]],[11,"interleave","","Combine anu number of vertex attributes into a single…",7,[[],[["vec",3],["result",4],["interleaveerror",4]]]],[11,"indices","","For `SingleIndexVertexData` every 3 indices corresponds to…",7,[[],["vec",3]]],[11,"positions","","Every 3 floats corresponds to one vertex\'s position",7,[[],["vertexattribute",3]]],[11,"normals","","Every 3 floats corresponds to one vertex\'s normal.",7,[[],[["option",4],["vertexattribute",3]]]],[11,"face_tangents","","Every 3 floats corresponds to one tangent vector - useful…",7,[[],[["option",4],["vertexattribute",3]]]],[11,"uvs","","Every 2 floats corresponds to one vertex\'s uv.",7,[[],[["option",4],["vertexattribute",3]]]],[11,"bones_influencers","","The indices of the joints that influence each bone.",7,[[],[["option",4],["vertexattribute",3]]]],[11,"bone_influencer_weights","","The weights of each bone influencer.",7,[[],[["option",4],["vertexattribute",3]]]],[11,"y_up","","Blender meshes get exported with a Z up coordinate system.…",8,[[]]],[6,"MeshesByFilename","","",null,null],[6,"MeshesByMeshName","","",null,null],[11,"armature_name","","The name of this mesh\'s parent armature",8,[[],[["string",3],["option",4]]]],[11,"set_armature_name","","Set the name of this mesh\'s parent armature",8,[[["string",3],["option",4]]]],[11,"materials","","A map of material name to the material\'s data",8,[[],["hashmap",3]]],[11,"custom_properties","","Custom properties for this mesh",8,[[],["hashmap",3]]],[11,"bounding_box","","The smallest box that contains the entire mesh",8,[[],["boundingbox",3]]],[11,"set_bounding_box","","Set the mesh\'s bounding box.",8,[[["boundingbox",3]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_subset","","",0,[[],["option",4]]],[11,"is_in_subset","","",0,[[]]],[11,"to_subset_unchecked","","",0,[[]]],[11,"from_subset","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"to_subset","","",1,[[],["option",4]]],[11,"is_in_subset","","",1,[[]]],[11,"to_subset_unchecked","","",1,[[]]],[11,"from_subset","","",1,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_subset","","",9,[[],["option",4]]],[11,"is_in_subset","","",9,[[]]],[11,"to_subset_unchecked","","",9,[[]]],[11,"from_subset","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_subset","","",10,[[],["option",4]]],[11,"is_in_subset","","",10,[[]]],[11,"to_subset_unchecked","","",10,[[]]],[11,"from_subset","","",10,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"to_subset","","",7,[[],["option",4]]],[11,"is_in_subset","","",7,[[]]],[11,"to_subset_unchecked","","",7,[[]]],[11,"from_subset","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_subset","","",8,[[],["option",4]]],[11,"is_in_subset","","",8,[[]]],[11,"to_subset_unchecked","","",8,[[]]],[11,"from_subset","","",8,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"as_fail","","",2,[[],["fail",8]]],[11,"to_subset","","",2,[[],["option",4]]],[11,"is_in_subset","","",2,[[]]],[11,"to_subset_unchecked","","",2,[[]]],[11,"from_subset","","",2,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"to_subset","","",4,[[],["option",4]]],[11,"is_in_subset","","",4,[[]]],[11,"to_subset_unchecked","","",4,[[]]],[11,"from_subset","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"to_subset","","",5,[[],["option",4]]],[11,"is_in_subset","","",5,[[]]],[11,"to_subset_unchecked","","",5,[[]]],[11,"from_subset","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"as_fail","","",6,[[],["fail",8]]],[11,"to_subset","","",6,[[],["option",4]]],[11,"is_in_subset","","",6,[[]]],[11,"to_subset_unchecked","","",6,[[]]],[11,"from_subset","","",6,[[]]],[11,"clone","","",1,[[],["boundingbox",3]]],[11,"clone","","",9,[[],["principledbsdf",3]]],[11,"clone","","",5,[[],["materialinput",4]]],[11,"clone","","",4,[[],["channel",4]]],[11,"default","","",1,[[]]],[11,"default","","",0,[[],["createsingleindexconfig",3]]],[11,"default","","",9,[[],["principledbsdf",3]]],[11,"default","","",5,[[]]],[11,"default","","",7,[[],["singleindexedvertexattributes",3]]],[11,"default","","",10,[[],["multiindexedvertexattributes",3]]],[11,"default","","",8,[[],["blendermesh",3]]],[11,"eq","","",1,[[["boundingbox",3]]]],[11,"ne","","",1,[[["boundingbox",3]]]],[11,"eq","","",9,[[["principledbsdf",3]]]],[11,"ne","","",9,[[["principledbsdf",3]]]],[11,"eq","","",5,[[["materialinput",4]]]],[11,"ne","","",5,[[["materialinput",4]]]],[11,"eq","","",4,[[["channel",4]]]],[11,"eq","","",7,[[["singleindexedvertexattributes",3]]]],[11,"ne","","",7,[[["singleindexedvertexattributes",3]]]],[11,"eq","","",10,[[["multiindexedvertexattributes",3]]]],[11,"ne","","",10,[[["multiindexedvertexattributes",3]]]],[11,"eq","","",8,[[["blendermesh",3]]]],[11,"ne","","",8,[[["blendermesh",3]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"name","","",2,[[],["option",4]]],[11,"cause","","",2,[[],[["fail",8],["option",4]]]],[11,"backtrace","","",2,[[],[["option",4],["backtrace",3]]]],[11,"name","","",6,[[],["option",4]]],[11,"cause","","",6,[[],[["fail",8],["option",4]]]],[11,"backtrace","","",6,[[],[["option",4],["backtrace",3]]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"serialize","","",1,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]]],"p":[[3,"CreateSingleIndexConfig"],[3,"BoundingBox"],[4,"FlattenMeshError"],[13,"DuplicateMeshNamesAcrossFiles"],[4,"Channel"],[4,"MaterialInput"],[4,"BlenderError"],[3,"SingleIndexedVertexAttributes"],[3,"BlenderMesh"],[3,"PrincipledBSDF"],[3,"MultiIndexedVertexAttributes"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);