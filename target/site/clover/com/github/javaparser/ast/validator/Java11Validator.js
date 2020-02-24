var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":54681,"methods":[{"el":36,"sc":5,"sl":33}],"name":"Java11Validator","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":33}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_1665":{"methods":[{"sl":33}],"name":"issue1003","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_324":{"methods":[{"sl":33}],"name":"issue1482","pass":true,"statements":[{"sl":34},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1665, 1158, 324], [1665, 1158, 324], [1665, 1158, 324], [], []]
