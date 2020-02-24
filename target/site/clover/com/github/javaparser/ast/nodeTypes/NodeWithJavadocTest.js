var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":69,"id":32621,"methods":[{"el":40,"sc":5,"sl":35},{"el":49,"sc":5,"sl":42},{"el":58,"sc":5,"sl":51},{"el":67,"sc":5,"sl":60}],"name":"NodeWithJavadocTest","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1162":{"methods":[{"sl":35}],"name":"removeJavaDocNegativeCaseNoComment","pass":true,"statements":[{"sl":37},{"sl":39}]},"test_1672":{"methods":[{"sl":42}],"name":"removeJavaDocNegativeCaseCommentNotJavaDoc","pass":true,"statements":[{"sl":44},{"sl":46},{"sl":47},{"sl":48}]},"test_1945":{"methods":[{"sl":60}],"name":"getJavadocOnMethodWithLineCommentShouldReturnEmptyOptional","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":65},{"sl":66}]},"test_968":{"methods":[{"sl":51}],"name":"removeJavaDocPositiveCase","pass":true,"statements":[{"sl":53},{"sl":55},{"sl":56},{"sl":57}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1162], [], [1162], [], [1162], [], [], [1672], [], [1672], [], [1672], [1672], [1672], [], [], [968], [], [968], [], [968], [968], [968], [], [], [1945], [], [1945], [1945], [], [1945], [1945], [], [], []]
