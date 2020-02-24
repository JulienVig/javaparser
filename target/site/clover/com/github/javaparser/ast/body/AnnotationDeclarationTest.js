var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":29356,"methods":[{"el":35,"sc":5,"sl":32},{"el":41,"sc":5,"sl":37}],"name":"AnnotationDeclarationTest","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1776":{"methods":[{"sl":32}],"name":"cantAddField","pass":true,"statements":[{"sl":34}]},"test_1931":{"methods":[{"sl":37}],"name":"issue2216","pass":true,"statements":[{"sl":39},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1776], [], [1776], [], [], [1931], [], [1931], [1931], [], []]
