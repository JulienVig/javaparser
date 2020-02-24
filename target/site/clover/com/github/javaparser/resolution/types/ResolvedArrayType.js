var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":113,"id":54014,"methods":[{"el":39,"sc":5,"sl":37},{"el":55,"sc":5,"sl":45},{"el":60,"sc":5,"sl":57},{"el":65,"sc":5,"sl":62},{"el":74,"sc":5,"sl":71},{"el":79,"sc":5,"sl":76},{"el":84,"sc":5,"sl":81},{"el":88,"sc":5,"sl":86},{"el":101,"sc":5,"sl":90},{"el":111,"sc":5,"sl":103}],"name":"ResolvedArrayType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_110":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":90}],"name":"test","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":83},{"sl":87},{"sl":92},{"sl":97},{"sl":98}]},"test_115":{"methods":[{"sl":37}],"name":"isVaraidic","pass":true,"statements":[{"sl":38}]},"test_234":{"methods":[{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"testIsAssignableBy","pass":true,"statements":[{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":97},{"sl":100}]},"test_236":{"methods":[{"sl":37},{"sl":81}],"name":"resolveArrayType","pass":true,"statements":[{"sl":38},{"sl":83}]},"test_258":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"methodCallWithReferenceTypeAsVaridicArgumentIsSolved","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":97},{"sl":100}]},"test_273":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"resolveCorrectMethodWithComplexOverloading1","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96}]},"test_337":{"methods":[{"sl":37},{"sl":76},{"sl":81},{"sl":90}],"name":"solveMethodStaticallyImportedWithoutAsterisk","pass":true,"statements":[{"sl":38},{"sl":78},{"sl":83},{"sl":92},{"sl":97},{"sl":98}]},"test_372":{"methods":[{"sl":37},{"sl":81}],"name":"arrayTypeIsNotPartOfTheTree","pass":true,"statements":[{"sl":38},{"sl":83}]},"test_411":{"methods":[{"sl":37},{"sl":81},{"sl":90}],"name":"lambdaPrint","pass":true,"statements":[{"sl":38},{"sl":83},{"sl":92},{"sl":97},{"sl":100}]},"test_422":{"methods":[{"sl":37},{"sl":45},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":90},{"sl":103}],"name":"resolveReferenceToMethodWithGenericArrayTypeParam","pass":true,"statements":[{"sl":38},{"sl":47},{"sl":48},{"sl":50},{"sl":52},{"sl":73},{"sl":78},{"sl":83},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":105},{"sl":106},{"sl":109}]},"test_446":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":90},{"sl":103}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":83},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":105},{"sl":106},{"sl":109}]},"test_460":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"compatibilityShouldConsiderAlsoTypeVariablesNegative","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_469":{"methods":[{"sl":37},{"sl":81}],"name":"testResolveArrayDeclaration","pass":true,"statements":[{"sl":38},{"sl":83}]},"test_474":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"compatibilityShouldConsiderAlsoTypeVariablesRaw","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_488":{"methods":[{"sl":37},{"sl":81},{"sl":90}],"name":"issue1485withoutSpecifyingJARs","pass":true,"statements":[{"sl":38},{"sl":83},{"sl":92},{"sl":97},{"sl":100}]},"test_490":{"methods":[{"sl":37},{"sl":81},{"sl":90}],"name":"test","pass":true,"statements":[{"sl":38},{"sl":83},{"sl":92},{"sl":97},{"sl":100}]},"test_492":{"methods":[{"sl":37}],"name":"testGetAllFields","pass":true,"statements":[{"sl":38}]},"test_516":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"resolveCorrectMethodWithComplexOverloading4","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":94},{"sl":97},{"sl":100}]},"test_544":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"compatibilityShouldConsiderAlsoTypeVariablesPositive","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_548":{"methods":[{"sl":37},{"sl":81},{"sl":90}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":38},{"sl":83},{"sl":92},{"sl":97},{"sl":100}]},"test_553":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_557":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90},{"sl":103}],"name":"issue7","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":105},{"sl":106},{"sl":109}]},"test_571":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"variadicIssue","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":94}]},"test_588":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"testGetGenericReturnType","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_682":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"testConsistentMethodResultion","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":97},{"sl":100}]},"test_684":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"testGetGenericParameters","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_687":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_723":{"methods":[{"sl":37},{"sl":81}],"name":"resolveMethodDeclaration","pass":true,"statements":[{"sl":38},{"sl":83}]},"test_74":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"resolveCorrectMethodWithComplexOverloading2","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96}]},"test_768":{"methods":[{"sl":37},{"sl":71},{"sl":81},{"sl":86}],"name":"testParameterNameOnClassesFromTheStdLibrary","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":83},{"sl":87}]},"test_773":{"methods":[{"sl":37},{"sl":76}],"name":"arrayLengthValueDeclaration","pass":true,"statements":[{"sl":38},{"sl":78}]},"test_788":{"methods":[{"sl":37},{"sl":71},{"sl":81},{"sl":86}],"name":"resolveExpressions","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":83},{"sl":87}]},"test_792":{"methods":[{"sl":37},{"sl":76},{"sl":86}],"name":"verifyAnArrayAccessExprTypeIsCalculatedProperly","pass":true,"statements":[{"sl":38},{"sl":78},{"sl":87}]},"test_80":{"methods":[{"sl":37},{"sl":71},{"sl":81},{"sl":86}],"name":"testGetSignature","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":83},{"sl":87}]},"test_811":{"methods":[{"sl":37},{"sl":45},{"sl":71},{"sl":76},{"sl":86},{"sl":103}],"name":"testReplaceParam","pass":true,"statements":[{"sl":38},{"sl":47},{"sl":48},{"sl":50},{"sl":52},{"sl":54},{"sl":73},{"sl":78},{"sl":87},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_817":{"methods":[{"sl":37},{"sl":45},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"selectMostSpecificVariadic","pass":true,"statements":[{"sl":38},{"sl":47},{"sl":48},{"sl":50},{"sl":52},{"sl":54},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":97},{"sl":100}]},"test_83":{"methods":[{"sl":37},{"sl":76},{"sl":86}],"name":"resolveReferenceToMethodCalledOnArrayAccess","pass":true,"statements":[{"sl":38},{"sl":78},{"sl":87}]},"test_839":{"methods":[{"sl":37},{"sl":71},{"sl":86}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":87}]},"test_86":{"methods":[{"sl":81}],"name":"testAsDescribe","pass":true,"statements":[{"sl":83}]},"test_871":{"methods":[{"sl":37},{"sl":71},{"sl":76},{"sl":86},{"sl":90}],"name":"resolveVariadicMethodWithGenericArgument","pass":true,"statements":[{"sl":38},{"sl":73},{"sl":78},{"sl":87},{"sl":92},{"sl":93},{"sl":96},{"sl":97},{"sl":100}]},"test_886":{"methods":[{"sl":62}],"name":"testAsTypeParameter","pass":true,"statements":[{"sl":64}]},"test_905":{"methods":[{"sl":71}],"name":"testAsArrayTypeUsage","pass":true,"statements":[{"sl":73}]},"test_906":{"methods":[{"sl":62}],"name":"testAsReferenceTypeUsage","pass":true,"statements":[{"sl":64}]},"test_911":{"methods":[{"sl":62}],"name":"testAsPrimitive","pass":true,"statements":[{"sl":64}]},"test_937":{"methods":[{"sl":76}],"name":"testIsReference","pass":true,"statements":[{"sl":78}]},"test_940":{"methods":[{"sl":76}],"name":"testIsArray","pass":true,"statements":[{"sl":78}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [110, 687, 768, 792, 817, 74, 460, 684, 548, 571, 337, 516, 682, 871, 236, 723, 811, 469, 411, 773, 80, 446, 372, 474, 258, 273, 839, 422, 492, 83, 544, 788, 557, 490, 588, 488, 115, 553], [110, 687, 768, 792, 817, 74, 460, 684, 548, 571, 337, 516, 682, 871, 236, 723, 811, 469, 411, 773, 80, 446, 372, 474, 258, 273, 839, 422, 492, 83, 544, 788, 557, 490, 588, 488, 115, 553], [], [], [], [], [], [], [817, 811, 422], [], [817, 811, 422], [817, 811, 422], [], [817, 811, 422], [], [817, 811, 422], [], [817, 811], [], [], [], [], [], [], [], [886, 906, 911], [], [886, 906, 911], [], [], [], [], [], [], [110, 687, 768, 817, 74, 460, 684, 571, 516, 682, 871, 811, 80, 446, 905, 474, 258, 273, 839, 422, 544, 788, 234, 557, 588, 553], [], [110, 687, 768, 817, 74, 460, 684, 571, 516, 682, 871, 811, 80, 446, 905, 474, 258, 273, 839, 422, 544, 788, 234, 557, 588, 553], [], [], [110, 792, 817, 74, 571, 337, 940, 516, 682, 871, 811, 773, 446, 258, 273, 422, 83, 937, 234, 557], [], [110, 792, 817, 74, 571, 337, 940, 516, 682, 871, 811, 773, 446, 258, 273, 422, 83, 937, 234, 557], [], [], [110, 768, 548, 337, 236, 723, 469, 411, 80, 446, 372, 86, 422, 788, 490, 488], [], [110, 768, 548, 337, 236, 723, 469, 411, 80, 446, 372, 86, 422, 788, 490, 488], [], [], [110, 687, 768, 792, 817, 74, 460, 684, 571, 516, 682, 871, 811, 80, 446, 474, 258, 273, 839, 422, 83, 544, 788, 234, 557, 588, 553], [110, 687, 768, 792, 817, 74, 460, 684, 571, 516, 682, 871, 811, 80, 446, 474, 258, 273, 839, 422, 83, 544, 788, 234, 557, 588, 553], [], [], [110, 817, 74, 548, 571, 337, 516, 682, 871, 411, 446, 258, 273, 422, 234, 557, 490, 488], [], [110, 817, 74, 548, 571, 337, 516, 682, 871, 411, 446, 258, 273, 422, 234, 557, 490, 488], [817, 74, 571, 516, 682, 871, 446, 258, 273, 422, 234, 557], [571, 516, 234], [], [817, 74, 682, 871, 446, 258, 273, 422, 234, 557], [110, 817, 548, 337, 516, 682, 871, 411, 258, 234, 490, 488], [110, 337], [], [817, 548, 516, 682, 871, 411, 258, 234, 490, 488], [], [], [811, 446, 422, 557], [], [811, 446, 422, 557], [811, 446, 422, 557], [811], [], [811, 446, 422, 557], [], [], [], []]
