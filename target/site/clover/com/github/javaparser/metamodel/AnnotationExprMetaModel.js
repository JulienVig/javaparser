var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":40459,"methods":[{"el":30,"sc":5,"sl":28},{"el":34,"sc":5,"sl":32}],"name":"AnnotationExprMetaModel","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1158":{"methods":[{"sl":28},{"sl":32}],"name":"testJavaDocComment","pass":true,"statements":[{"sl":29},{"sl":33}]},"test_1665":{"methods":[{"sl":28},{"sl":32}],"name":"issue1003","pass":true,"statements":[{"sl":29},{"sl":33}]},"test_324":{"methods":[{"sl":28},{"sl":32}],"name":"issue1482","pass":true,"statements":[{"sl":29},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1665, 1158, 324], [1665, 1158, 324], [], [], [1665, 1158, 324], [1665, 1158, 324], [], [], [], []]
