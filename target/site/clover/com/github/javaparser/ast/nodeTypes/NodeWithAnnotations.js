var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":225,"id":32116,"methods":[{"el":49,"sc":5,"sl":47},{"el":55,"sc":5,"sl":51},{"el":61,"sc":5,"sl":57},{"el":75,"sc":5,"sl":69},{"el":89,"sc":5,"sl":83},{"el":100,"sc":5,"sl":97},{"el":111,"sc":5,"sl":108},{"el":125,"sc":5,"sl":119},{"el":136,"sc":5,"sl":133},{"el":150,"sc":5,"sl":145},{"el":162,"sc":5,"sl":159},{"el":173,"sc":5,"sl":171},{"el":186,"sc":5,"sl":182},{"el":196,"sc":5,"sl":194},{"el":206,"sc":5,"sl":204},{"el":215,"sc":5,"sl":213},{"el":224,"sc":5,"sl":222}],"name":"NodeWithAnnotations","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1041":{"methods":[{"sl":57},{"sl":119},{"sl":213}],"name":"handleAddingMarkerAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124},{"sl":214}]},"test_1109":{"methods":[{"sl":57},{"sl":119}],"name":"handleOverrideMarkerAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124}]},"test_1127":{"methods":[{"sl":57},{"sl":119},{"sl":133},{"sl":194},{"sl":204}],"name":"testIsAnnotationPresent","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124},{"sl":134},{"sl":135},{"sl":195},{"sl":205}]},"test_1268":{"methods":[{"sl":57},{"sl":119}],"name":"addingAnnotationsNoModifiers","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124}]},"test_1277":{"methods":[{"sl":213}],"name":"removingAnnotationsWithSpaces","pass":true,"statements":[{"sl":214}]},"test_1297":{"methods":[{"sl":57},{"sl":69}],"name":"handleOverrideAnnotationAlternative","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":71},{"sl":73},{"sl":74}]},"test_1345":{"methods":[{"sl":57},{"sl":119},{"sl":213}],"name":"moveOrAddOverrideAnnotations","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124},{"sl":214}]},"test_1368":{"methods":[{"sl":213}],"name":"removingAnnotationsWithSpaces","pass":true,"statements":[{"sl":214}]},"test_1430":{"methods":[{"sl":57},{"sl":119}],"name":"testAddMarkerAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124}]},"test_1431":{"methods":[{"sl":57},{"sl":83},{"sl":108},{"sl":213},{"sl":222}],"name":"testGetAnnotationByClass","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":85},{"sl":87},{"sl":88},{"sl":109},{"sl":110},{"sl":214},{"sl":223}]},"test_1440":{"methods":[{"sl":57},{"sl":83},{"sl":108},{"sl":213}],"name":"testGetAnnotationByName","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":85},{"sl":87},{"sl":88},{"sl":109},{"sl":110},{"sl":214}]},"test_1446":{"methods":[{"sl":57},{"sl":83},{"sl":108}],"name":"handleDeprecatedAnnotationFinalClass","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":85},{"sl":87},{"sl":88},{"sl":109},{"sl":110}]},"test_150":{"methods":[{"sl":47}],"name":"solveReflectionSingleMemberAnnotation","pass":true,"statements":[{"sl":48}]},"test_1530":{"methods":[{"sl":57},{"sl":69}],"name":"addingAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":71},{"sl":73},{"sl":74}]},"test_1597":{"methods":[{"sl":57},{"sl":119},{"sl":213}],"name":"moveOverrideAnnotations","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124},{"sl":214}]},"test_1623":{"methods":[{"sl":47},{"sl":57},{"sl":145},{"sl":171}],"name":"testAddSingleMemberAnnotation","pass":true,"statements":[{"sl":48},{"sl":59},{"sl":60},{"sl":147},{"sl":149},{"sl":172}]},"test_1646":{"methods":[{"sl":213}],"name":"removingAnnotations","pass":true,"statements":[{"sl":214}]},"test_1655":{"methods":[{"sl":213}],"name":"removingAnnotations","pass":true,"statements":[{"sl":214}]},"test_1681":{"methods":[{"sl":57},{"sl":69},{"sl":213}],"name":"handleOverrideAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":71},{"sl":73},{"sl":74},{"sl":214}]},"test_1719":{"methods":[{"sl":57},{"sl":145},{"sl":171},{"sl":182}],"name":"fluentInterface","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":147},{"sl":149},{"sl":172},{"sl":184},{"sl":185}]},"test_1721":{"methods":[{"sl":57},{"sl":119}],"name":"addingAnnotationsShort","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":121},{"sl":123},{"sl":124}]},"test_1838":{"methods":[{"sl":57},{"sl":145}],"name":"addingToExistingAnnotations","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":147},{"sl":149}]},"test_1855":{"methods":[{"sl":213}],"name":"removingAnnotations","pass":true,"statements":[{"sl":214}]},"test_1864":{"methods":[{"sl":47},{"sl":57},{"sl":145},{"sl":159}],"name":"testAddSingleMemberAnnotation2","pass":true,"statements":[{"sl":48},{"sl":59},{"sl":60},{"sl":147},{"sl":149},{"sl":160},{"sl":161}]},"test_1901":{"methods":[{"sl":57},{"sl":83},{"sl":108}],"name":"handleDeprecatedAnnotationAbstractClass","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":85},{"sl":87},{"sl":88},{"sl":109},{"sl":110}]},"test_1927":{"methods":[{"sl":47},{"sl":57},{"sl":83},{"sl":108}],"name":"testAddAnnotation","pass":true,"statements":[{"sl":48},{"sl":59},{"sl":60},{"sl":85},{"sl":87},{"sl":88},{"sl":109},{"sl":110}]},"test_237":{"methods":[{"sl":47}],"name":"solveJavaParserMetaAnnotations","pass":true,"statements":[{"sl":48}]},"test_287":{"methods":[{"sl":47}],"name":"solveJavassistMetaAnnotation","pass":true,"statements":[{"sl":48}]},"test_357":{"methods":[{"sl":47}],"name":"solveReflectionMarkerAnnotation","pass":true,"statements":[{"sl":48}]},"test_470":{"methods":[{"sl":47}],"name":"solveJavaParserSingleMemberAnnotation","pass":true,"statements":[{"sl":48}]},"test_487":{"methods":[{"sl":47}],"name":"solveJavassistNormalAnnotation","pass":true,"statements":[{"sl":48}]},"test_496":{"methods":[{"sl":47}],"name":"solveQualifiedAnnotation","pass":true,"statements":[{"sl":48}]},"test_627":{"methods":[{"sl":47}],"name":"solveJavaParserMarkerAnnotation","pass":true,"statements":[{"sl":48}]},"test_646":{"methods":[{"sl":47}],"name":"solveJavaParserNormalAnnotation","pass":true,"statements":[{"sl":48}]},"test_688":{"methods":[{"sl":47}],"name":"solveJavassistMarkerAnnotation","pass":true,"statements":[{"sl":48}]},"test_718":{"methods":[{"sl":47}],"name":"solveJavassistSingleMemberAnnotation","pass":true,"statements":[{"sl":48}]},"test_810":{"methods":[{"sl":47}],"name":"solveReflectionMetaAnnotations","pass":true,"statements":[{"sl":48}]},"test_967":{"methods":[{"sl":57},{"sl":69}],"name":"addingTwoAnnotations","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":71},{"sl":73},{"sl":74}]},"test_973":{"methods":[{"sl":57},{"sl":69}],"name":"addingAnnotation","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":71},{"sl":73},{"sl":74}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1864, 237, 287, 646, 718, 357, 487, 496, 150, 1623, 627, 688, 810, 1927, 470], [1864, 237, 287, 646, 718, 357, 487, 496, 150, 1623, 627, 688, 810, 1927, 470], [], [], [], [], [], [], [], [], [1345, 1268, 1864, 1597, 1109, 1430, 1681, 1440, 1721, 1041, 1446, 1530, 1297, 1127, 1431, 1838, 973, 967, 1623, 1901, 1719, 1927], [], [1345, 1268, 1864, 1597, 1109, 1430, 1681, 1440, 1721, 1041, 1446, 1530, 1297, 1127, 1431, 1838, 973, 967, 1623, 1901, 1719, 1927], [1345, 1268, 1864, 1597, 1109, 1430, 1681, 1440, 1721, 1041, 1446, 1530, 1297, 1127, 1431, 1838, 973, 967, 1623, 1901, 1719, 1927], [], [], [], [], [], [], [], [], [1681, 1530, 1297, 973, 967], [], [1681, 1530, 1297, 973, 967], [], [1681, 1530, 1297, 973, 967], [1681, 1530, 1297, 973, 967], [], [], [], [], [], [], [], [], [1440, 1446, 1431, 1901, 1927], [], [1440, 1446, 1431, 1901, 1927], [], [1440, 1446, 1431, 1901, 1927], [1440, 1446, 1431, 1901, 1927], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1440, 1446, 1431, 1901, 1927], [1440, 1446, 1431, 1901, 1927], [1440, 1446, 1431, 1901, 1927], [], [], [], [], [], [], [], [], [1345, 1268, 1597, 1109, 1430, 1721, 1041, 1127], [], [1345, 1268, 1597, 1109, 1430, 1721, 1041, 1127], [], [1345, 1268, 1597, 1109, 1430, 1721, 1041, 1127], [1345, 1268, 1597, 1109, 1430, 1721, 1041, 1127], [], [], [], [], [], [], [], [], [1127], [1127], [1127], [], [], [], [], [], [], [], [], [], [1864, 1838, 1623, 1719], [], [1864, 1838, 1623, 1719], [], [1864, 1838, 1623, 1719], [], [], [], [], [], [], [], [], [], [1864], [1864], [1864], [], [], [], [], [], [], [], [], [], [1623, 1719], [1623, 1719], [], [], [], [], [], [], [], [], [], [1719], [], [1719], [1719], [], [], [], [], [], [], [], [], [1127], [1127], [], [], [], [], [], [], [], [], [1127], [1127], [], [], [], [], [], [], [], [1345, 1277, 1597, 1655, 1681, 1368, 1440, 1041, 1431, 1646, 1855], [1345, 1277, 1597, 1655, 1681, 1368, 1440, 1041, 1431, 1646, 1855], [], [], [], [], [], [], [], [1431], [1431], [], []]
