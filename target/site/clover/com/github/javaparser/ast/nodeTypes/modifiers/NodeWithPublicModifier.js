var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":59074,"methods":[{"el":35,"sc":5,"sl":33},{"el":40,"sc":5,"sl":37}],"name":"NodeWithPublicModifier","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1952":{"methods":[{"sl":33}],"name":"testAddEnum","pass":true,"statements":[{"sl":34}]},"test_961":{"methods":[{"sl":33}],"name":"testAddAnnotationDeclaration","pass":true,"statements":[{"sl":34}]},"test_996":{"methods":[{"sl":33}],"name":"testAddInterface","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [961, 996, 1952], [961, 996, 1952], [], [], [], [], [], [], [], []]
