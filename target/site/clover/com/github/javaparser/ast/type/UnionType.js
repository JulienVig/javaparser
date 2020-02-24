var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":192,"id":33439,"methods":[{"el":67,"sc":5,"sl":65},{"el":77,"sc":5,"sl":72},{"el":82,"sc":5,"sl":79},{"el":87,"sc":5,"sl":84},{"el":101,"sc":5,"sl":89},{"el":106,"sc":5,"sl":103},{"el":112,"sc":5,"sl":108},{"el":118,"sc":5,"sl":114},{"el":132,"sc":5,"sl":120},{"el":137,"sc":5,"sl":134},{"el":143,"sc":5,"sl":139},{"el":149,"sc":5,"sl":145},{"el":163,"sc":5,"sl":151},{"el":169,"sc":5,"sl":165},{"el":175,"sc":5,"sl":171},{"el":180,"sc":5,"sl":177},{"el":185,"sc":5,"sl":182},{"el":191,"sc":5,"sl":187}],"name":"UnionType","sl":60}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1115":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"multiCatch","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1135":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"noMultiCatch","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1147":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"printAMultiCatch","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1464":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"parseOwnSourceCode","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1518":{"methods":[{"sl":65},{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"multiCatchWithoutElements","pass":true,"statements":[{"sl":66},{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1537":{"methods":[{"sl":65},{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"multiCatchWithOneElement","pass":true,"statements":[{"sl":66},{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1539":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"printUnionType","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1577":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"canParseAllJavadocsInJavaParser","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1822":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"printingExampleJavaConcepts","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_1894":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"printParameterHavingUnionType","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_324":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"issue1482","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]},"test_765":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145},{"sl":182}],"name":"solveMultiCatchType","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148},{"sl":184}]},"test_788":{"methods":[{"sl":72},{"sl":84},{"sl":89},{"sl":103},{"sl":114},{"sl":145}],"name":"resolveExpressions","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":105},{"sl":117},{"sl":148}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1537, 1518], [1537, 1518], [], [], [], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [], [], [], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [], [], [], [], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [1537, 1577, 1518, 1115, 1147, 324, 788, 1464, 1822, 1894, 1539, 765, 1135], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [765], [], [765], [], [], [], [], [], [], [], []]
