var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":83,"id":40020,"methods":[{"el":37,"sc":5,"sl":35},{"el":45,"sc":5,"sl":39},{"el":53,"sc":5,"sl":47},{"el":61,"sc":5,"sl":55},{"el":69,"sc":5,"sl":63},{"el":82,"sc":5,"sl":71}],"name":"YamlPrinterTest","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1012":{"methods":[{"sl":35},{"sl":39}],"name":"testWithType","pass":true,"statements":[{"sl":36},{"sl":41},{"sl":42},{"sl":43},{"sl":44}]},"test_1386":{"methods":[{"sl":35},{"sl":63}],"name":"testWithColonFollowedByLineSeparatorInValue","pass":true,"statements":[{"sl":36},{"sl":65},{"sl":66},{"sl":67},{"sl":68}]},"test_1476":{"methods":[{"sl":35},{"sl":47}],"name":"testWithoutType","pass":true,"statements":[{"sl":36},{"sl":49},{"sl":50},{"sl":51},{"sl":52}]},"test_1582":{"methods":[{"sl":35},{"sl":55}],"name":"testWithColonFollowedBySpaceInValue","pass":true,"statements":[{"sl":36},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]},"test_1770":{"methods":[{"sl":35},{"sl":71}],"name":"testParsingJavadocWithQuoteAndNewline","pass":true,"statements":[{"sl":36},{"sl":73},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1386, 1012, 1476, 1582, 1770], [1386, 1012, 1476, 1582, 1770], [], [], [1012], [], [1012], [1012], [1012], [1012], [], [], [1476], [], [1476], [1476], [1476], [1476], [], [], [1582], [], [1582], [1582], [1582], [1582], [], [], [1386], [], [1386], [1386], [1386], [1386], [], [], [1770], [], [1770], [], [], [], [], [1770], [1770], [1770], [1770], [], []]
