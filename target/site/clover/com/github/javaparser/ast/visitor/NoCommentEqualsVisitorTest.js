var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":53,"id":53453,"methods":[{"el":38,"sc":5,"sl":33},{"el":45,"sc":5,"sl":40},{"el":52,"sc":5,"sl":47}],"name":"NoCommentEqualsVisitorTest","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1080":{"methods":[{"sl":47}],"name":"testNotEquals","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_1353":{"methods":[{"sl":40}],"name":"testEqualsWithDifferentComments","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":44}]},"test_1944":{"methods":[{"sl":33}],"name":"testEquals","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1944], [], [1944], [1944], [1944], [], [], [1353], [], [1353], [1353], [1353], [], [], [1080], [], [1080], [1080], [1080], [], []]
