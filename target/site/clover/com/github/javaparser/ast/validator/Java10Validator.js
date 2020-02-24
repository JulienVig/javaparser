var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":54678,"methods":[{"el":39,"sc":5,"sl":34}],"name":"Java10Validator","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":34}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":35},{"sl":36}]},"test_1665":{"methods":[{"sl":34}],"name":"issue1003","pass":true,"statements":[{"sl":35},{"sl":36}]},"test_324":{"methods":[{"sl":34}],"name":"issue1482","pass":true,"statements":[{"sl":35},{"sl":36}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1665, 1158, 324], [1665, 1158, 324], [1665, 1158, 324], [], [], [], []]
