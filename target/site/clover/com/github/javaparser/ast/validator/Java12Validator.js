var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":54684,"methods":[{"el":33,"sc":5,"sl":29}],"name":"Java12Validator","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":29}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_1665":{"methods":[{"sl":29}],"name":"issue1003","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_324":{"methods":[{"sl":29}],"name":"issue1482","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1665, 1158, 324], [1665, 1158, 324], [1665, 1158, 324], [1665, 1158, 324], [], []]
