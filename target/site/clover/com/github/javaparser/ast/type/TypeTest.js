var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":90,"id":33840,"methods":[{"el":47,"sc":5,"sl":41},{"el":52,"sc":5,"sl":49},{"el":60,"sc":62,"sl":58},{"el":68,"sc":5,"sl":54},{"el":72,"sc":5,"sl":70},{"el":82,"sc":5,"sl":74},{"el":88,"sc":5,"sl":84}],"name":"TypeTest","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1066":{"methods":[{"sl":41},{"sl":70}],"name":"asString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":71}]},"test_1515":{"methods":[{"sl":74}],"name":"arrayType","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]},"test_1636":{"methods":[{"sl":84}],"name":"issue1251","pass":true,"statements":[{"sl":86},{"sl":87}]},"test_1687":{"methods":[{"sl":49},{"sl":70}],"name":"primitiveTypeArgumentDefaultValidator","pass":true,"statements":[{"sl":51},{"sl":71}]},"test_1921":{"methods":[{"sl":54},{"sl":58}],"name":"primitiveTypeArgumentLenientValidator","pass":true,"statements":[{"sl":56},{"sl":58},{"sl":59},{"sl":62},{"sl":64},{"sl":66},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1066], [], [1066], [1066], [1066], [1066], [], [], [1687], [], [1687], [], [], [1921], [], [1921], [], [1921], [1921], [], [], [1921], [], [1921], [], [1921], [1921], [], [], [1066, 1687], [1066, 1687], [], [], [1515], [], [1515], [1515], [1515], [1515], [1515], [1515], [], [], [1636], [], [1636], [1636], [], [], []]
