var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":97,"id":19584,"methods":[{"el":43,"sc":5,"sl":41},{"el":54,"sc":5,"sl":48},{"el":73,"sc":5,"sl":59},{"el":80,"sc":5,"sl":75},{"el":84,"sc":5,"sl":82},{"el":88,"sc":5,"sl":86},{"el":96,"sc":5,"sl":94}],"name":"FunctionalInterfaceLogic","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"consumerUsedInStream","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_140":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"superclassMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_175":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_195":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":82},{"sl":86},{"sl":94}],"name":"issue200","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":83},{"sl":87},{"sl":95}]},"test_196":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"functionDeclaredInMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_200":{"methods":[{"sl":48}],"name":"testGetFunctionalMethodNegativeCaseOnClass","pass":true,"statements":[{"sl":49},{"sl":52}]},"test_212":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"thisClassMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_213":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"superclassMethodWithSubclassType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_221":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaBlockExplicitReturn","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_262":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_284":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_38":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"solveParameterOfLambdaInFieldDecl","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_384":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaMap","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_397":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"biFunction","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_406":{"methods":[{"sl":75}],"name":"resolveTypeUsageOfCascadeMethodInGenericClass","pass":true,"statements":[{"sl":76},{"sl":77}]},"test_411":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaPrint","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":79},{"sl":95}]},"test_417":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"functionUsedInStream","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_446":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_480":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"classMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_52":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"superclassMethodNotOverridden","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_535":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"biFunctionDeclaredInMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_548":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_551":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_578":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"resolveMethodReferenceExpr","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_594":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"solveParameterOfLambdaInVarDecl","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_603":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"customTriFunction","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_616":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaReduce","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_625":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_69":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_691":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_705":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"biFunctionUsedInStream","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_707":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"superclassMethodOverridden","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_71":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_729":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"testGetFunctionalMethodPositiveCasesOnInterfaces","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_776":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"typeOfVoidLambda","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_782":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaBlockMultiLineReturn","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_794":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"biFunctionInMethodCall","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":79},{"sl":95}]},"test_797":{"methods":[{"sl":48},{"sl":59},{"sl":75},{"sl":94}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":76},{"sl":77},{"sl":95}]},"test_81":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"consumerDeclaredInMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]},"test_96":{"methods":[{"sl":48},{"sl":59},{"sl":94}],"name":"staticMethod","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":61},{"sl":68},{"sl":69},{"sl":95}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 200, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 200, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [], [200], [], [], [], [], [], [], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [], [], [], [], [], [], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [], [], [], [], [], [551, 195, 782, 548, 129, 384, 417, 797, 411, 71, 446, 175, 262, 776, 69, 625, 794, 616, 284, 691, 705, 406, 221], [551, 195, 782, 548, 129, 384, 417, 797, 411, 71, 446, 175, 262, 776, 69, 625, 794, 616, 284, 691, 705, 406, 221], [551, 195, 782, 548, 129, 384, 417, 797, 71, 446, 175, 262, 776, 69, 625, 616, 284, 691, 705, 406, 221], [], [411, 794], [], [], [195], [195], [], [], [195], [195], [], [], [], [], [], [], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [707, 551, 195, 782, 52, 38, 548, 129, 384, 417, 480, 535, 212, 797, 411, 71, 446, 196, 175, 262, 776, 96, 69, 81, 625, 794, 213, 397, 616, 284, 140, 578, 691, 729, 594, 705, 221, 603], [], []]
