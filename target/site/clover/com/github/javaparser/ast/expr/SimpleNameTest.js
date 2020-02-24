var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":52,"id":58972,"methods":[{"el":35,"sc":5,"sl":32},{"el":40,"sc":5,"sl":37},{"el":45,"sc":5,"sl":42},{"el":51,"sc":5,"sl":47}],"name":"SimpleNameTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1487":{"methods":[{"sl":47}],"name":"unicodeEscapesArePreservedInIdentifiers","pass":true,"statements":[{"sl":49},{"sl":50}]},"test_1575":{"methods":[{"sl":37}],"name":"identifierMustNotBeEmpty","pass":true,"statements":[{"sl":39}]},"test_1711":{"methods":[{"sl":32}],"name":"defaultConstructorSetsIdentifierToEmpty","pass":true,"statements":[{"sl":34}]},"test_1744":{"methods":[{"sl":42}],"name":"identifierMustNotBeNull","pass":true,"statements":[{"sl":44}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1711], [], [1711], [], [], [1575], [], [1575], [], [], [1744], [], [1744], [], [], [1487], [], [1487], [1487], [], []]
