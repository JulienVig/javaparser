var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":60,"id":32609,"methods":[{"el":38,"sc":5,"sl":33},{"el":45,"sc":5,"sl":40},{"el":52,"sc":5,"sl":47},{"el":59,"sc":5,"sl":54}],"name":"NodeWithBodyTest","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1117":{"methods":[{"sl":47}],"name":"simpleStatementIsNotEmpty","pass":true,"statements":[{"sl":49},{"sl":51}]},"test_1226":{"methods":[{"sl":33}],"name":"emptyStatementIsEmpty","pass":true,"statements":[{"sl":35},{"sl":37}]},"test_1256":{"methods":[{"sl":40}],"name":"emptyBlockIsEmpty","pass":true,"statements":[{"sl":42},{"sl":44}]},"test_1291":{"methods":[{"sl":54}],"name":"nonEmptyBlockIsNotEmpty","pass":true,"statements":[{"sl":56},{"sl":58}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1226], [], [1226], [], [1226], [], [], [1256], [], [1256], [], [1256], [], [], [1117], [], [1117], [], [1117], [], [], [1291], [], [1291], [], [1291], [], []]
