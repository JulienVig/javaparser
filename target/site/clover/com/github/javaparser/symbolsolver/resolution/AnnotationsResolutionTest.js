var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":319,"id":12152,"methods":[{"el":70,"sc":5,"sl":63},{"el":76,"sc":5,"sl":72},{"el":92,"sc":5,"sl":78},{"el":108,"sc":5,"sl":94},{"el":124,"sc":5,"sl":110},{"el":141,"sc":5,"sl":126},{"el":161,"sc":5,"sl":143},{"el":178,"sc":5,"sl":163},{"el":195,"sc":5,"sl":180},{"el":212,"sc":5,"sl":197},{"el":229,"sc":5,"sl":214},{"el":247,"sc":5,"sl":231},{"el":265,"sc":5,"sl":249},{"el":280,"sc":5,"sl":267},{"el":291,"sc":5,"sl":282},{"el":302,"sc":5,"sl":293},{"el":309,"sc":5,"sl":304},{"el":317,"sc":5,"sl":311}],"name":"AnnotationsResolutionTest","sl":61}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_150":{"methods":[{"sl":143}],"name":"solveReflectionSingleMemberAnnotation","pass":true,"statements":[{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_237":{"methods":[{"sl":214}],"name":"solveJavaParserMetaAnnotations","pass":true,"statements":[{"sl":217},{"sl":218},{"sl":219},{"sl":222},{"sl":225},{"sl":226},{"sl":227},{"sl":228}]},"test_287":{"methods":[{"sl":249}],"name":"solveJavassistMetaAnnotation","pass":true,"statements":[{"sl":252},{"sl":253},{"sl":254},{"sl":255},{"sl":258},{"sl":261},{"sl":262},{"sl":263},{"sl":264}]},"test_318":{"methods":[{"sl":304}],"name":"solvePrimitiveAnnotationMember","pass":true,"statements":[{"sl":306},{"sl":307},{"sl":308}]},"test_357":{"methods":[{"sl":126}],"name":"solveReflectionMarkerAnnotation","pass":true,"statements":[{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":135},{"sl":138},{"sl":139},{"sl":140}]},"test_387":{"methods":[{"sl":293}],"name":"solveAnnotationAncestor","pass":true,"statements":[{"sl":295},{"sl":296},{"sl":297},{"sl":299},{"sl":300},{"sl":301}]},"test_470":{"methods":[{"sl":94}],"name":"solveJavaParserSingleMemberAnnotation","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":105},{"sl":106},{"sl":107}]},"test_487":{"methods":[{"sl":197}],"name":"solveJavassistNormalAnnotation","pass":true,"statements":[{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":206},{"sl":209},{"sl":210},{"sl":211}]},"test_496":{"methods":[{"sl":267}],"name":"solveQualifiedAnnotation","pass":true,"statements":[{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":278},{"sl":279}]},"test_538":{"methods":[{"sl":282}],"name":"solveQualifiedAnnotationWithReferenceTypeHasAnnotationAsWell","pass":true,"statements":[{"sl":284},{"sl":285},{"sl":286},{"sl":288},{"sl":290}]},"test_57":{"methods":[{"sl":311}],"name":"solveInnerClassAnnotationMember","pass":true,"statements":[{"sl":313},{"sl":314},{"sl":315},{"sl":316}]},"test_627":{"methods":[{"sl":78}],"name":"solveJavaParserMarkerAnnotation","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91}]},"test_646":{"methods":[{"sl":110}],"name":"solveJavaParserNormalAnnotation","pass":true,"statements":[{"sl":113},{"sl":114},{"sl":115},{"sl":118},{"sl":121},{"sl":122},{"sl":123}]},"test_688":{"methods":[{"sl":163}],"name":"solveJavassistMarkerAnnotation","pass":true,"statements":[{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":172},{"sl":175},{"sl":176},{"sl":177}]},"test_718":{"methods":[{"sl":180}],"name":"solveJavassistSingleMemberAnnotation","pass":true,"statements":[{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":189},{"sl":192},{"sl":193},{"sl":194}]},"test_810":{"methods":[{"sl":231}],"name":"solveReflectionMetaAnnotations","pass":true,"statements":[{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":240},{"sl":243},{"sl":244},{"sl":245},{"sl":246}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [627], [], [], [627], [627], [627], [], [], [627], [], [], [627], [627], [627], [], [], [470], [], [], [470], [470], [470], [], [], [470], [], [], [470], [470], [470], [], [], [646], [], [], [646], [646], [646], [], [], [646], [], [], [646], [646], [646], [], [], [357], [], [], [357], [357], [357], [357], [], [], [357], [], [], [357], [357], [357], [], [], [150], [], [], [150], [150], [150], [150], [], [], [], [], [], [150], [], [], [150], [150], [150], [], [], [688], [], [], [688], [688], [688], [688], [], [], [688], [], [], [688], [688], [688], [], [], [718], [], [], [718], [718], [718], [718], [], [], [718], [], [], [718], [718], [718], [], [], [487], [], [], [487], [487], [487], [487], [], [], [487], [], [], [487], [487], [487], [], [], [237], [], [], [237], [237], [237], [], [], [237], [], [], [237], [237], [237], [237], [], [], [810], [], [], [810], [810], [810], [810], [], [], [810], [], [], [810], [810], [810], [810], [], [], [287], [], [], [287], [287], [287], [287], [], [], [287], [], [], [287], [287], [287], [287], [], [], [496], [], [496], [496], [496], [496], [496], [], [496], [496], [], [496], [496], [], [], [538], [], [538], [538], [538], [], [538], [], [538], [], [], [387], [], [387], [387], [387], [], [387], [387], [387], [], [], [318], [], [318], [318], [318], [], [], [57], [], [57], [57], [57], [57], [], [], []]
