var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":30957,"methods":[{"el":58,"sc":5,"sl":45},{"el":68,"sc":5,"sl":60},{"el":75,"sc":5,"sl":70},{"el":86,"sc":5,"sl":77}],"name":"DataKeyTest","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1022":{"methods":[{"sl":45}],"name":"addAFewKeysAndSeeIfTheyAreStoredCorrectly","pass":true,"statements":[{"sl":47},{"sl":49},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57}]},"test_1459":{"methods":[{"sl":70}],"name":"aNonExistentKeyThrowsAnException","pass":true,"statements":[{"sl":72},{"sl":74}]},"test_1922":{"methods":[{"sl":60}],"name":"removeWorks","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":65},{"sl":67}]},"test_1969":{"methods":[{"sl":77}],"name":"cloningCopiesData","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":84},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1022], [], [1022], [], [1022], [1022], [1022], [], [1022], [1022], [1022], [1022], [1022], [], [], [1922], [], [1922], [1922], [], [1922], [], [1922], [], [], [1459], [], [1459], [], [1459], [], [], [1969], [], [1969], [1969], [1969], [], [1969], [1969], [1969], [], []]
