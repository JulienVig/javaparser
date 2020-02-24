var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":120,"id":15587,"methods":[{"el":55,"sc":5,"sl":48},{"el":64,"sc":5,"sl":61},{"el":69,"sc":5,"sl":66},{"el":77,"sc":5,"sl":71},{"el":82,"sc":5,"sl":79},{"el":87,"sc":5,"sl":84},{"el":92,"sc":5,"sl":89},{"el":97,"sc":5,"sl":94},{"el":102,"sc":5,"sl":99},{"el":114,"sc":5,"sl":104},{"el":119,"sc":5,"sl":116}],"name":"ReflectionParameterDeclaration","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"consumerUsedInStream","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_13":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveLocalAndSeveralAnnidatedLevels","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_137":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveElementOfList","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_139":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testFieldAccessThroughClassAndThis","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_155":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"genericCollectionWithWildcards","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_160":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveUsageOfMethodOfGenericClassWithUnboundedWildcard","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_161":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"typeOfPlusExpressionsCharAndString","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_175":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_176":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"test_int","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_188":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaCollect","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_195":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"issue200","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_221":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaBlockExplicitReturn","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_262":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_284":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_384":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaMap","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_392":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"solveMethodWithClassExpressionAsParameter","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_398":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"typeOfPlusExpressionsStringAndChar","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_406":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveTypeUsageOfCascadeMethodInGenericClass","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_411":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaPrint","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_417":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"functionUsedInStream","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_446":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_455":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"checkReflectionConstructorSignature","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_460":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"compatibilityShouldConsiderAlsoTypeVariablesNegative","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_474":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"compatibilityShouldConsiderAlsoTypeVariablesRaw","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_48":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"test_Integer","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_488":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"issue1485withoutSpecifyingJARs","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_490":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"test","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_518":{"methods":[{"sl":48},{"sl":99}],"name":"testGetDeclaredMethods","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":101}]},"test_534":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"enumAndStaticInitializer","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_544":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"compatibilityShouldConsiderAlsoTypeVariablesPositive","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_548":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_551":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_553":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_557":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"issue7","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_566":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"classCast","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_578":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveMethodReferenceExpr","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_579":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"genericCollectionWithWildcardsAndExtensions","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_588":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetGenericReturnType","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_608":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveUsageOfMethodOfGenericClassWithExtendsWildcard","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_612":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"typeDeclarationSuperClassImplicitlyIncludeObject","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_616":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaReduce","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_62":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveMethodOnGenericClass","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_625":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_682":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testConsistentMethodResultion","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_684":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetGenericParameters","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_687":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_69":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_691":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_70":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"issueWithInternalEnumConstantReference","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_705":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"biFunctionUsedInStream","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_71":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_729":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetFunctionalMethodPositiveCasesOnInterfaces","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_751":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"staticFieldCallsFromInnerClasses","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_768":{"methods":[{"sl":48},{"sl":61},{"sl":89},{"sl":99}],"name":"testParameterNameOnClassesFromTheStdLibrary","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":63},{"sl":91},{"sl":101}]},"test_776":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"typeOfVoidLambda","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_782":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaBlockMultiLineReturn","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_797":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_80":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetSignature","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_837":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"resolveElementOfListAdvancedExample","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_839":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]},"test_875":{"methods":[{"sl":48},{"sl":99}],"name":"testGetDeclaredMethods","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":101}]},"test_878":{"methods":[{"sl":48},{"sl":61},{"sl":89},{"sl":99}],"name":"testParameterNameOnClassesFromThisProject","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":63},{"sl":91},{"sl":101}]},"test_88":{"methods":[{"sl":48},{"sl":89},{"sl":99}],"name":"solveNonPublicParentConstructorReflection","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":91},{"sl":101}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [], [], [], [], [], [768, 878], [], [768, 878], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [], [], [], [], [], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [48, 551, 161, 195, 782, 548, 160, 176, 411, 446, 474, 612, 175, 262, 776, 455, 284, 490, 588, 488, 691, 729, 687, 608, 768, 13, 139, 460, 684, 129, 137, 384, 417, 875, 682, 797, 155, 398, 751, 71, 80, 188, 566, 69, 534, 839, 518, 625, 62, 88, 544, 557, 579, 616, 392, 70, 578, 837, 705, 878, 406, 221, 553], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
