var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":180,"id":32399,"methods":[{"el":41,"sc":5,"sl":39},{"el":49,"sc":5,"sl":45},{"el":55,"sc":5,"sl":53},{"el":60,"sc":5,"sl":57},{"el":70,"sc":5,"sl":68},{"el":76,"sc":5,"sl":72},{"el":80,"sc":5,"sl":78},{"el":85,"sc":5,"sl":82},{"el":96,"sc":5,"sl":94},{"el":101,"sc":5,"sl":98},{"el":112,"sc":5,"sl":109},{"el":123,"sc":5,"sl":120},{"el":134,"sc":5,"sl":131},{"el":156,"sc":5,"sl":151},{"el":179,"sc":5,"sl":170}],"name":"NodeWithParameters","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1057":{"methods":[{"sl":39}],"name":"testCreateSetterInAClass","pass":true,"statements":[{"sl":40}]},"test_1124":{"methods":[{"sl":39}],"name":"testCreateSetterInEnum","pass":true,"statements":[{"sl":40}]},"test_1199":{"methods":[{"sl":109}],"name":"checkNodeTextCreatedForPrimitiveType","pass":true,"statements":[{"sl":110}]},"test_1224":{"methods":[{"sl":78},{"sl":82},{"sl":98},{"sl":120},{"sl":131}],"name":"testGetParamByType","pass":true,"statements":[{"sl":79},{"sl":83},{"sl":84},{"sl":99},{"sl":100},{"sl":121},{"sl":132}]},"test_1265":{"methods":[{"sl":109}],"name":"registerWithSelfPropagatingMode","pass":true,"statements":[{"sl":110}]},"test_1274":{"methods":[{"sl":109}],"name":"registerWithJustNodeMode","pass":true,"statements":[{"sl":110}]},"test_1296":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"addingParameterToAnAddedMethodInASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_1341":{"methods":[{"sl":53},{"sl":72}],"name":"addingParameters","pass":true,"statements":[{"sl":54},{"sl":74},{"sl":75}]},"test_1346":{"methods":[{"sl":39}],"name":"deleteAParameterTriggerNotifications","pass":true,"statements":[{"sl":40}]},"test_1347":{"methods":[{"sl":53},{"sl":57},{"sl":72}],"name":"testGetMethodsWithName","pass":true,"statements":[{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75}]},"test_1396":{"methods":[{"sl":53},{"sl":57},{"sl":72}],"name":"testGetMethods","pass":true,"statements":[{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75}]},"test_1408":{"methods":[{"sl":39}],"name":"methodDeclarationRemovingParameter","pass":true,"statements":[{"sl":40}]},"test_1495":{"methods":[{"sl":109}],"name":"checkNodeTextCreatedForMethodParameter","pass":true,"statements":[{"sl":110}]},"test_1600":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"exampleParam1","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_1617":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"addingStatementToAnAddedMethodInASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_1641":{"methods":[{"sl":109}],"name":"registerSubTree","pass":true,"statements":[{"sl":110}]},"test_1667":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"printASimpleMethodAddingAParameterToAMethodWithOneParameter","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_1674":{"methods":[{"sl":53},{"sl":57},{"sl":72},{"sl":151},{"sl":170}],"name":"testGetMethodsWithParameterTypes","pass":true,"statements":[{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75},{"sl":152},{"sl":171}]},"test_1689":{"methods":[{"sl":53},{"sl":72}],"name":"addingParameters","pass":true,"statements":[{"sl":54},{"sl":74},{"sl":75}]},"test_1733":{"methods":[{"sl":39}],"name":"getParameterWithArrays","pass":true,"statements":[{"sl":40}]},"test_1745":{"methods":[{"sl":53},{"sl":57},{"sl":72}],"name":"testGetConstructors","pass":true,"statements":[{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75}]},"test_175":{"methods":[{"sl":39}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":40}]},"test_1751":{"methods":[{"sl":39},{"sl":53},{"sl":57},{"sl":72},{"sl":78},{"sl":82},{"sl":98}],"name":"testAddParameter","pass":true,"statements":[{"sl":40},{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75},{"sl":79},{"sl":83},{"sl":84},{"sl":99},{"sl":100}]},"test_1768":{"methods":[{"sl":53},{"sl":57},{"sl":72},{"sl":151},{"sl":170}],"name":"testGetConstructorsWithParameterTypes","pass":true,"statements":[{"sl":54},{"sl":58},{"sl":59},{"sl":74},{"sl":75},{"sl":152},{"sl":171}]},"test_1787":{"methods":[{"sl":39}],"name":"setParameterWithArrays","pass":true,"statements":[{"sl":40}]},"test_1794":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"exampleParam2","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_1935":{"methods":[{"sl":109}],"name":"registerWithNodeAndExistingDescendantsMode","pass":true,"statements":[{"sl":110}]},"test_195":{"methods":[{"sl":39}],"name":"issue200","pass":true,"statements":[{"sl":40}]},"test_262":{"methods":[{"sl":39}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":40}]},"test_284":{"methods":[{"sl":39}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":40}]},"test_321":{"methods":[{"sl":39}],"name":"identifyNamesInSimpleExamples","pass":true,"statements":[{"sl":40}]},"test_384":{"methods":[{"sl":39}],"name":"lambdaMap","pass":true,"statements":[{"sl":40}]},"test_390":{"methods":[{"sl":39}],"name":"parametersExposedToChildForMethod","pass":true,"statements":[{"sl":40}]},"test_411":{"methods":[{"sl":39}],"name":"lambdaPrint","pass":true,"statements":[{"sl":40}]},"test_446":{"methods":[{"sl":39}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":40}]},"test_454":{"methods":[{"sl":39}],"name":"parameterDeclarationResolve","pass":true,"statements":[{"sl":40}]},"test_493":{"methods":[{"sl":39}],"name":"parametersExposedToChildForConstructor","pass":true,"statements":[{"sl":40}]},"test_495":{"methods":[{"sl":39}],"name":"identifyNameRolesInSimpleExamples","pass":true,"statements":[{"sl":40}]},"test_548":{"methods":[{"sl":39}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":40}]},"test_551":{"methods":[{"sl":39}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":40}]},"test_616":{"methods":[{"sl":39}],"name":"lambdaReduce","pass":true,"statements":[{"sl":40}]},"test_625":{"methods":[{"sl":39}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":40}]},"test_69":{"methods":[{"sl":39}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":40}]},"test_691":{"methods":[{"sl":39}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":40}]},"test_71":{"methods":[{"sl":39}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":40}]},"test_797":{"methods":[{"sl":39}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":40}]},"test_882":{"methods":[{"sl":39}],"name":"parametersExposedToChildForLambda","pass":true,"statements":[{"sl":40}]},"test_958":{"methods":[{"sl":53},{"sl":68},{"sl":72}],"name":"printASimpleMethodAddingAParameterToAMethodWithZeroParameters","pass":true,"statements":[{"sl":54},{"sl":69},{"sl":74},{"sl":75}]},"test_989":{"methods":[{"sl":78},{"sl":82},{"sl":98},{"sl":109}],"name":"testGetParamByName","pass":true,"statements":[{"sl":79},{"sl":83},{"sl":84},{"sl":99},{"sl":100},{"sl":110}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [551, 195, 390, 548, 1057, 1751, 411, 446, 1787, 175, 262, 1346, 284, 691, 321, 493, 882, 1408, 384, 797, 71, 69, 495, 625, 454, 1733, 616, 1124], [551, 195, 390, 548, 1057, 1751, 411, 446, 1787, 175, 262, 1346, 284, 691, 321, 493, 882, 1408, 384, 797, 71, 69, 495, 625, 454, 1733, 616, 1124], [], [], [], [], [], [], [], [], [], [], [], [], [1667, 1768, 1751, 1689, 1674, 1794, 1745, 1617, 958, 1396, 1341, 1296, 1600, 1347], [1667, 1768, 1751, 1689, 1674, 1794, 1745, 1617, 958, 1396, 1341, 1296, 1600, 1347], [], [], [1768, 1751, 1674, 1745, 1396, 1347], [1768, 1751, 1674, 1745, 1396, 1347], [1768, 1751, 1674, 1745, 1396, 1347], [], [], [], [], [], [], [], [], [1667, 1794, 1617, 958, 1296, 1600], [1667, 1794, 1617, 958, 1296, 1600], [], [], [1667, 1768, 1751, 1689, 1674, 1794, 1745, 1617, 958, 1396, 1341, 1296, 1600, 1347], [], [1667, 1768, 1751, 1689, 1674, 1794, 1745, 1617, 958, 1396, 1341, 1296, 1600, 1347], [1667, 1768, 1751, 1689, 1674, 1794, 1745, 1617, 958, 1396, 1341, 1296, 1600, 1347], [], [], [1751, 1224, 989], [1751, 1224, 989], [], [], [1751, 1224, 989], [1751, 1224, 989], [1751, 1224, 989], [], [], [], [], [], [], [], [], [], [], [], [], [], [1751, 1224, 989], [1751, 1224, 989], [1751, 1224, 989], [], [], [], [], [], [], [], [], [1935, 1199, 1265, 1495, 1641, 1274, 989], [1935, 1199, 1265, 1495, 1641, 1274, 989], [], [], [], [], [], [], [], [], [], [1224], [1224], [], [], [], [], [], [], [], [], [], [1224], [1224], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1768, 1674], [1768, 1674], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1768, 1674], [1768, 1674], [], [], [], [], [], [], [], [], []]
