var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":88,"id":24256,"methods":[{"el":59,"sc":5,"sl":56},{"el":64,"sc":5,"sl":61},{"el":71,"sc":5,"sl":66},{"el":78,"sc":5,"sl":73},{"el":87,"sc":5,"sl":80}],"name":"LogTest","sl":32},{"el":52,"id":24256,"methods":[{"el":39,"sc":9,"sl":36},{"el":44,"sc":9,"sl":41},{"el":51,"sc":9,"sl":46}],"name":"LogTest.TestAdapter","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1030":{"methods":[{"sl":41},{"sl":66}],"name":"testTrace","pass":true,"statements":[{"sl":43},{"sl":68},{"sl":69},{"sl":70}]},"test_1186":{"methods":[{"sl":46},{"sl":80}],"name":"testError","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86}]},"test_1516":{"methods":[{"sl":36},{"sl":73}],"name":"testInfo","pass":true,"statements":[{"sl":38},{"sl":75},{"sl":76},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1516], [], [1516], [], [], [1030], [], [1030], [], [], [1186], [], [1186], [1186], [1186], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1030], [], [1030], [1030], [1030], [], [], [1516], [], [1516], [1516], [1516], [], [], [1186], [], [1186], [1186], [1186], [1186], [1186], [], []]
