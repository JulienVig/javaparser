var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":84,"id":34149,"methods":[{"el":34,"sc":5,"sl":32},{"el":39,"sc":5,"sl":36},{"el":49,"sc":5,"sl":41},{"el":54,"sc":5,"sl":51},{"el":59,"sc":5,"sl":56},{"el":64,"sc":5,"sl":61},{"el":69,"sc":5,"sl":66},{"el":71,"sc":5,"sl":71},{"el":73,"sc":5,"sl":73},{"el":83,"sc":5,"sl":75}],"name":"Added","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1003":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"issue2099AddingStatementAfterTraillingComment2","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1013":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"invokeModifierVisitorIssue1297","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1019":{"methods":[{"sl":32},{"sl":41}],"name":"addingStatementToEmptyMethodBody","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1041":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleAddingMarkerAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1051":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiersWithExistingAnnotationsShort","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1058":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addMethodToASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1068":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"changingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1084":{"methods":[{"sl":32},{"sl":75}],"name":"settingName","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1109":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleOverrideMarkerAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1116":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingOnlyParameter","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1121":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingOnlyParameter","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1125":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"example8","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1140":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingMember","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1144":{"methods":[{"sl":32},{"sl":41}],"name":"calculateDifferenceAIsEmpty","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1145":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"replaceBodyShouldNotBreakAnonymousClasses","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1154":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"settingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1163":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1167":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"example1","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1178":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1185":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingGenericVariableDeclarationWithAddedModifierWithAnotherSyntaxe","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1197":{"methods":[{"sl":32},{"sl":41}],"name":"compilationUnitExampleWithPackageSetDiff","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1201":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingDefaultValue","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1216":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addedLineCommentsPrinted","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1228":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1230":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"settingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1231":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"printASimpleMethodAddingAStatement","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1234":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingVariableDeclarationWithAddedModifier","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1235":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingStatement3","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1238":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printAModuleInfoSpecificKeywordUsedAsIdentifier1","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1250":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"changingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1255":{"methods":[{"sl":32},{"sl":75}],"name":"issue1321","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1261":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printAModuleInfoSpecificKeywordUsedAsIdentifier2","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1262":{"methods":[{"sl":32},{"sl":75}],"name":"example5","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1268":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingAnnotationsNoModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1270":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"printASuperSimpleClassWithAFieldAdded","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1272":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"testIndentOfCodeBlocks","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1278":{"methods":[{"sl":32},{"sl":75}],"name":"binaryExpressionOperator","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1280":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"changingNonePrimitiveTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1286":{"methods":[{"sl":32},{"sl":41},{"sl":56}],"name":"annotationDeclarationExampleWithModifierAdded","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":58}]},"test_1295":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1296":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addingParameterToAnAddedMethodInASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1297":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleOverrideAnnotationAlternative","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1304":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1307":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1318":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1337":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingConstants","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1341":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingParameters","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1345":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"moveOrAddOverrideAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1354":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addedImportShouldBePrependedWithEOL","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1359":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiersWithExistingAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1361":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1366":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"settingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1375":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"theLexicalPreservationStringForAnAddedMethodShouldBeIndented","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1383":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"exampleParam5","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1401":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingTypeParameterWhenThereAreNone","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1402":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1403":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1419":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingPackageDeclaration","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1425":{"methods":[{"sl":32},{"sl":41},{"sl":56}],"name":"annotationDeclarationExampleWithNameChanged","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":58}]},"test_1446":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleDeprecatedAnnotationFinalClass","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1457":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingDefaultValue","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1468":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingStatement2","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1475":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingDimension","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1480":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"changingTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1489":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingEnum2","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1494":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingGenericVariableDeclarationWithAddedModifier","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1497":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingGeneric2VariableDeclarationWithAddedModifierWithAnotherSyntaxe","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1513":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingFieldWithAnotherField","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1520":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingExtendedTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1524":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1530":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1593":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"example9","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1597":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"moveOverrideAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1600":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"exampleParam1","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1605":{"methods":[{"sl":32},{"sl":41}],"name":"addedModifierToConstructorDeclaration","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1615":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingTypeParameterAsFirstWhenThereAreSome","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1617":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addingStatementToAnAddedMethodInASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1624":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addASecondStatementToExistingMethod","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1630":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printingGeneric2VariableDeclarationWithAddedModifier","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1645":{"methods":[{"sl":32},{"sl":41},{"sl":56},{"sl":61}],"name":"differenceAfterddingStatementToEmptyBlock","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":58},{"sl":63}]},"test_1657":{"methods":[{"sl":32},{"sl":75}],"name":"unaryExpressionOperator","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1667":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printASimpleMethodAddingAParameterToAMethodWithOneParameter","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1670":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addingStatementToAnAddedMethodInASimpleClassWithMoreFormattingFromStep3","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1681":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleOverrideAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1688":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1689":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingParameters","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1693":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingImplementedTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1702":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingDimension","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1706":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"example7","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1721":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingAnnotationsShort","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1722":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"classToInterface","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":78},{"sl":79}]},"test_1728":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"settingName","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1734":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addedBlockCommentsPrinted","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1739":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1748":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingStatement1","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1758":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiersWithExistingAnnotationsShort","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1759":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"renameASimpleClassWithMoreFormatting","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1766":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"testInvokeModifierVisitor","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1771":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"reactToSetPackageDeclarationOnCuStartingWithComment","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1780":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"issue2099AddingStatementAfterTraillingComment1","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1781":{"methods":[{"sl":32},{"sl":75}],"name":"example2","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1794":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"exampleParam2","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1797":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingMember","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1811":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingPackageDeclaration","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1820":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingTypeParameterAsLastWhenThereAreSome","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1825":{"methods":[{"sl":32},{"sl":75}],"name":"assignExpressionOperator","pass":true,"statements":[{"sl":33},{"sl":76},{"sl":77}]},"test_1838":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingToExistingAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1841":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"example6","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1844":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"changingType","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1850":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1857":{"methods":[{"sl":32},{"sl":41}],"name":"addedDefaultValueInAnnotationMemberDeclaration","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1859":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1881":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"interfaceToClass","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":78},{"sl":79}]},"test_1885":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingExtendedTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1889":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"instanceToStatic","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":78},{"sl":79}]},"test_1897":{"methods":[{"sl":32},{"sl":41}],"name":"methodDeclarationAddingParameter","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_1901":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"handleDeprecatedAnnotationAbstractClass","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1908":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiersWithExistingAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1924":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1926":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"ifStmtTransformation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_1932":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"nodeTextForModifiedMethod","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1936":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"replacingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1939":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingImplementedTypes","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1943":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingModifiers","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_1963":{"methods":[{"sl":32},{"sl":41}],"name":"replacingNameForEnumConstantDeclaration","pass":true,"statements":[{"sl":33},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]},"test_958":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"printASimpleMethodAddingAParameterToAMethodWithZeroParameters","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77}]},"test_967":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingTwoAnnotations","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_973":{"methods":[{"sl":32},{"sl":71},{"sl":73},{"sl":75}],"name":"addingAnnotation","pass":true,"statements":[{"sl":33},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_994":{"methods":[{"sl":32},{"sl":56},{"sl":61},{"sl":71},{"sl":73},{"sl":75}],"name":"addingField","pass":true,"statements":[{"sl":33},{"sl":58},{"sl":63},{"sl":71},{"sl":73},{"sl":76},{"sl":77},{"sl":78},{"sl":79}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1425, 1489, 1721, 1230, 1897, 1446, 1185, 1857, 1058, 1781, 1144, 1758, 1771, 1255, 1197, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1605, 1600, 1286, 1167, 1885, 1797, 1825, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1278, 1728, 1154, 1402, 1262, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1084, 1844, 1939, 1794, 1963, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1657, 1780, 1401, 1759, 1820, 1019, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1645, 1304, 1766, 1468], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1425, 1489, 1721, 1230, 1897, 1446, 1185, 1857, 1058, 1781, 1144, 1758, 1771, 1255, 1197, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1605, 1600, 1286, 1167, 1885, 1797, 1825, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1278, 1728, 1154, 1402, 1262, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1084, 1844, 1939, 1794, 1963, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1657, 1780, 1401, 1759, 1820, 1019, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1645, 1304, 1766, 1468], [], [], [], [], [], [], [], [1425, 1897, 1857, 1144, 1197, 1605, 1286, 1963, 1019, 1645], [], [1425, 1897, 1857, 1144, 1197, 1605, 1286, 1963, 1019, 1645], [1425, 1897, 1857, 1144, 1197, 1605, 1286, 1963, 1019, 1645], [], [1425, 1897, 1857, 1144, 1197, 1605, 1286, 1963, 1019, 1645], [], [1425, 1897, 1857, 1144, 1197, 1605, 1286, 1963, 1019, 1645], [], [], [], [], [], [], [], [1231, 1145, 1670, 1425, 1058, 1383, 1270, 1617, 1286, 1375, 1734, 1932, 1216, 1296, 994, 1645], [], [1231, 1145, 1670, 1425, 1058, 1383, 1270, 1617, 1286, 1375, 1734, 1932, 1216, 1296, 994, 1645], [], [], [1231, 1145, 1670, 1058, 1383, 1270, 1617, 1375, 1734, 1932, 1216, 1296, 994, 1645], [], [1231, 1145, 1670, 1058, 1383, 1270, 1617, 1375, 1734, 1932, 1216, 1296, 994, 1645], [], [], [], [], [], [], [], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1489, 1721, 1230, 1446, 1185, 1058, 1758, 1771, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1600, 1167, 1885, 1797, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1728, 1154, 1402, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1844, 1939, 1794, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1780, 1401, 1759, 1820, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1304, 1766, 1468], [], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1489, 1721, 1230, 1446, 1185, 1058, 1758, 1771, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1600, 1167, 1885, 1797, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1728, 1154, 1402, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1844, 1939, 1794, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1780, 1401, 1759, 1820, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1304, 1766, 1468], [], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1489, 1721, 1230, 1446, 1185, 1058, 1781, 1758, 1771, 1255, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1600, 1167, 1885, 1797, 1825, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1278, 1728, 1154, 1402, 1262, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1084, 1844, 1939, 1794, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1657, 1780, 1401, 1759, 1820, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1304, 1766, 1468], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1489, 1721, 1230, 1446, 1185, 1058, 1781, 1758, 1771, 1255, 1722, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1889, 1881, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1600, 1167, 1885, 1797, 1825, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1278, 1728, 1154, 1402, 1262, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1084, 1844, 1939, 1794, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1657, 1780, 1401, 1759, 1820, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1304, 1766, 1468], [1231, 1145, 1615, 1670, 1238, 1480, 1280, 1489, 1721, 1230, 1446, 1185, 1058, 1781, 1758, 1771, 1255, 1359, 1383, 1926, 1228, 1270, 1702, 1494, 1366, 1617, 958, 1630, 1497, 1268, 1250, 1003, 1318, 1109, 1261, 1140, 1041, 1841, 1530, 1297, 1201, 1125, 1341, 1295, 1163, 1600, 1167, 1885, 1797, 1825, 1068, 1524, 1667, 1375, 1457, 1354, 1908, 1513, 1597, 1178, 1681, 1272, 1235, 1943, 1278, 1728, 1154, 1402, 1262, 1734, 1013, 1693, 1689, 1838, 1234, 973, 1932, 967, 1307, 1739, 1936, 1748, 1084, 1844, 1939, 1794, 1520, 1624, 1901, 1706, 1419, 1345, 1051, 1593, 1116, 1859, 1924, 1811, 1850, 1688, 1657, 1780, 1401, 1759, 1820, 1216, 1337, 1121, 1475, 1296, 1361, 1403, 994, 1304, 1766, 1468], [1231, 1145, 1615, 1670, 1489, 1721, 1446, 1185, 1058, 1781, 1722, 1383, 1270, 1494, 1617, 1630, 1497, 1268, 1889, 1881, 1003, 1109, 1041, 1530, 1297, 1125, 1163, 1167, 1797, 1524, 1667, 1375, 1457, 1354, 1908, 1597, 1178, 1681, 1272, 1235, 1943, 1734, 1838, 1234, 973, 1932, 967, 1739, 1936, 1748, 1939, 1794, 1520, 1624, 1901, 1345, 1051, 1593, 1924, 1780, 1401, 1820, 1216, 1337, 1296, 1403, 994, 1304, 1468], [1231, 1145, 1615, 1670, 1489, 1721, 1446, 1185, 1058, 1781, 1722, 1383, 1270, 1494, 1617, 1630, 1497, 1268, 1889, 1881, 1003, 1109, 1041, 1530, 1297, 1125, 1163, 1167, 1797, 1524, 1667, 1375, 1457, 1354, 1908, 1597, 1178, 1681, 1272, 1235, 1943, 1734, 1838, 1234, 973, 1932, 967, 1739, 1936, 1748, 1939, 1794, 1520, 1624, 1901, 1345, 1051, 1593, 1924, 1780, 1401, 1820, 1216, 1337, 1296, 1403, 994, 1304, 1468], [], [], [], [], []]
