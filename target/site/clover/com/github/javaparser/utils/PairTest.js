var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":24284,"methods":[{"el":34,"sc":5,"sl":29},{"el":41,"sc":5,"sl":36}],"name":"PairTest","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1612":{"methods":[{"sl":36}],"name":"testToStringNulls","pass":true,"statements":[{"sl":38},{"sl":40}]},"test_1713":{"methods":[{"sl":29}],"name":"testToString","pass":true,"statements":[{"sl":31},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1713], [], [1713], [], [1713], [], [], [1612], [], [1612], [], [1612], [], []]
