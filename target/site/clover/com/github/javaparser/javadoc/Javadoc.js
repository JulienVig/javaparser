var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":167,"id":40229,"methods":[{"el":48,"sc":5,"sl":45},{"el":53,"sc":5,"sl":50},{"el":62,"sc":5,"sl":60},{"el":72,"sc":5,"sl":70},{"el":76,"sc":5,"sl":74},{"el":96,"sc":5,"sl":82},{"el":103,"sc":5,"sl":101},{"el":128,"sc":5,"sl":108},{"el":132,"sc":5,"sl":130},{"el":139,"sc":5,"sl":137},{"el":150,"sc":5,"sl":141},{"el":157,"sc":5,"sl":152},{"el":165,"sc":5,"sl":159}],"name":"Javadoc","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1028":{"methods":[{"sl":45},{"sl":141}],"name":"parseSimplestContent","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1033":{"methods":[{"sl":45},{"sl":50},{"sl":60},{"sl":82},{"sl":108}],"name":"toCommentForJavadocWithTwoLinesOfJustDescriptionAndOneBlockTag","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":61},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":109},{"sl":110},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":125},{"sl":126},{"sl":127}]},"test_1069":{"methods":[{"sl":45},{"sl":82}],"name":"toTextForEmptyJavadoc","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":83},{"sl":84},{"sl":88},{"sl":91},{"sl":95}]},"test_1078":{"methods":[{"sl":45},{"sl":50},{"sl":130},{"sl":137}],"name":"descriptionAndBlockTagsAreRetrievable","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":131},{"sl":138}]},"test_1079":{"methods":[{"sl":45},{"sl":141}],"name":"parseCommentWithIndentation","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1158":{"methods":[{"sl":45},{"sl":50},{"sl":137}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":138}]},"test_1182":{"methods":[{"sl":45},{"sl":82}],"name":"toTextForJavadocWithTwoLinesOfJustDescription","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":91},{"sl":95}]},"test_1214":{"methods":[{"sl":45},{"sl":50},{"sl":141}],"name":"parseMultilineParamBlockTags","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1314":{"methods":[{"sl":45},{"sl":141}],"name":"parseEmptySingleLine","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1325":{"methods":[{"sl":45},{"sl":50},{"sl":141}],"name":"parseParamBlockTags","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1369":{"methods":[{"sl":45},{"sl":50},{"sl":141}],"name":"parseBlockTagsAndEmptyDescription","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1405":{"methods":[{"sl":45},{"sl":50},{"sl":137}],"name":"blockTagModificationWorks","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":138}]},"test_1416":{"methods":[{"sl":45},{"sl":50},{"sl":137}],"name":"emptyLinesBetweenBlockTagsGetsFiltered","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":138}]},"test_1433":{"methods":[{"sl":45},{"sl":50},{"sl":60},{"sl":82}],"name":"toTextForJavadocWithTwoLinesOfJustDescriptionAndOneBlockTag","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":61},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":95}]},"test_1443":{"methods":[{"sl":45},{"sl":130}],"name":"issue1533","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":131}]},"test_1463":{"methods":[{"sl":45},{"sl":82},{"sl":108}],"name":"testReplaceDuplicateJavaDocComment","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":91},{"sl":95},{"sl":109},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":125},{"sl":126},{"sl":127}]},"test_1511":{"methods":[{"sl":45},{"sl":50},{"sl":137},{"sl":141}],"name":"parseBlockTagsAndProvideTagName","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":138},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1561":{"methods":[{"sl":45},{"sl":141}],"name":"parseCommentWithNewLines","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1577":{"methods":[{"sl":45},{"sl":50}],"name":"canParseAllJavadocsInJavaParser","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52}]},"test_1584":{"methods":[{"sl":45},{"sl":82},{"sl":108}],"name":"toCommentForEmptyJavadoc","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":83},{"sl":84},{"sl":88},{"sl":91},{"sl":95},{"sl":109},{"sl":110},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":125},{"sl":126},{"sl":127}]},"test_1648":{"methods":[{"sl":45},{"sl":141}],"name":"parseSingleLineWithSpacing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_1690":{"methods":[{"sl":45},{"sl":50},{"sl":82},{"sl":130}],"name":"inlineTagsAreParsable","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":51},{"sl":52},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":131}]},"test_1863":{"methods":[{"sl":45},{"sl":141}],"name":"parseSingleLineWithNewLines","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":143},{"sl":144},{"sl":146},{"sl":148}]},"test_969":{"methods":[{"sl":45},{"sl":82},{"sl":108}],"name":"toCommentorJavadocWithTwoLinesOfJustDescription","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":91},{"sl":95},{"sl":109},{"sl":110},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":125},{"sl":126},{"sl":127}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1028, 1584, 1405, 1443, 1069, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1648, 1511, 1463, 1314, 1079, 969, 1416, 1561, 1033, 1214, 1863, 1182], [1028, 1584, 1405, 1443, 1069, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1648, 1511, 1463, 1314, 1079, 969, 1416, 1561, 1033, 1214, 1863, 1182], [1028, 1584, 1405, 1443, 1069, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1648, 1511, 1463, 1314, 1079, 969, 1416, 1561, 1033, 1214, 1863, 1182], [], [], [1405, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1511, 1416, 1033, 1214], [1405, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1511, 1416, 1033, 1214], [1405, 1078, 1577, 1369, 1690, 1158, 1325, 1433, 1511, 1416, 1033, 1214], [], [], [], [], [], [], [], [1433, 1033], [1433, 1033], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [1690, 1433, 1463, 969, 1033, 1182], [1690, 1433, 1463, 969, 1033, 1182], [], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [1690, 1433, 1033], [], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [1690, 1433, 1033], [1690, 1433, 1033], [], [1584, 1069, 1690, 1433, 1463, 969, 1033, 1182], [], [], [], [], [], [], [], [], [], [], [], [], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [1584, 969, 1033], [], [], [], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [1463, 969, 1033], [1463, 969, 1033], [1463, 969, 1033], [1463, 969, 1033], [1463, 969, 1033], [], [], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [1584, 1463, 969, 1033], [], [], [1443, 1078, 1690], [1443, 1078, 1690], [], [], [], [], [], [1405, 1078, 1158, 1511, 1416], [1405, 1078, 1158, 1511, 1416], [], [], [1028, 1369, 1325, 1648, 1511, 1314, 1079, 1561, 1214, 1863], [], [1028, 1369, 1325, 1648, 1511, 1314, 1079, 1561, 1214, 1863], [1028, 1369, 1325, 1648, 1511, 1314, 1079, 1561, 1214, 1863], [], [1028, 1369, 1325, 1648, 1511, 1314, 1079, 1561, 1214, 1863], [], [1028, 1369, 1325, 1648, 1511, 1314, 1079, 1561, 1214, 1863], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
