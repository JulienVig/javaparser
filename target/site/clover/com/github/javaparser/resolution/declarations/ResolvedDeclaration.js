var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":113,"id":41803,"methods":[{"el":36,"sc":5,"sl":34},{"el":48,"sc":5,"sl":46},{"el":55,"sc":5,"sl":53},{"el":59,"sc":5,"sl":57},{"el":66,"sc":5,"sl":64},{"el":73,"sc":5,"sl":71},{"el":80,"sc":5,"sl":78},{"el":87,"sc":5,"sl":85},{"el":94,"sc":5,"sl":92},{"el":101,"sc":5,"sl":99},{"el":108,"sc":5,"sl":106},{"el":112,"sc":5,"sl":110}],"name":"ResolvedDeclaration","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":34}],"name":"resolveGenericReturnTypeFromInputParam","pass":true,"statements":[{"sl":35}]},"test_129":{"methods":[{"sl":34}],"name":"consumerUsedInStream","pass":true,"statements":[{"sl":35}]},"test_13":{"methods":[{"sl":34}],"name":"resolveLocalAndSeveralAnnidatedLevels","pass":true,"statements":[{"sl":35}]},"test_137":{"methods":[{"sl":34}],"name":"resolveElementOfList","pass":true,"statements":[{"sl":35}]},"test_140":{"methods":[{"sl":34}],"name":"superclassMethod","pass":true,"statements":[{"sl":35}]},"test_155":{"methods":[{"sl":34}],"name":"genericCollectionWithWildcards","pass":true,"statements":[{"sl":35}]},"test_160":{"methods":[{"sl":34}],"name":"resolveUsageOfMethodOfGenericClassWithUnboundedWildcard","pass":true,"statements":[{"sl":35}]},"test_164":{"methods":[{"sl":34}],"name":"testGetAllAncestorsOnTypeWithSpecifiedTypeParametersForClassAbstractCollection","pass":true,"statements":[{"sl":35}]},"test_165":{"methods":[{"sl":34}],"name":"getParam_forGenericMethodWithTypeParameter","pass":true,"statements":[{"sl":35}]},"test_17":{"methods":[{"sl":34}],"name":"testIsAssignableBySimple","pass":true,"statements":[{"sl":35}]},"test_175":{"methods":[{"sl":34}],"name":"resolveReferenceToLambdaParamSimplified","pass":true,"statements":[{"sl":35}]},"test_176":{"methods":[{"sl":34}],"name":"test_int","pass":true,"statements":[{"sl":35}]},"test_177":{"methods":[{"sl":34}],"name":"testGenericParentContructorJavassist","pass":true,"statements":[{"sl":35}]},"test_180":{"methods":[{"sl":34}],"name":"resolveGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":35}]},"test_188":{"methods":[{"sl":34}],"name":"lambdaCollect","pass":true,"statements":[{"sl":35}]},"test_19":{"methods":[{"sl":34}],"name":"solveSymbolAsValueReferringToDeclaredStaticField","pass":true,"statements":[{"sl":35}]},"test_192":{"methods":[{"sl":34}],"name":"resolveCompoundGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":35}]},"test_195":{"methods":[{"sl":34}],"name":"issue200","pass":true,"statements":[{"sl":35}]},"test_196":{"methods":[{"sl":34}],"name":"functionDeclaredInMethod","pass":true,"statements":[{"sl":35}]},"test_203":{"methods":[{"sl":34}],"name":"resolveTypeUsageOfFirstMethodInGenericClass","pass":true,"statements":[{"sl":35}]},"test_212":{"methods":[{"sl":34}],"name":"thisClassMethod","pass":true,"statements":[{"sl":35}]},"test_214":{"methods":[{"sl":34}],"name":"testGetConstructors","pass":true,"statements":[{"sl":35}]},"test_221":{"methods":[{"sl":34}],"name":"lambdaBlockExplicitReturn","pass":true,"statements":[{"sl":35}]},"test_233":{"methods":[{"sl":34}],"name":"testIsAssignableByGenericsInheritance","pass":true,"statements":[{"sl":35}]},"test_234":{"methods":[{"sl":34}],"name":"testIsAssignableBy","pass":true,"statements":[{"sl":35}]},"test_240":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfInterfaceQualifiedDifferentPackage","pass":true,"statements":[{"sl":35}]},"test_246":{"methods":[{"sl":34}],"name":"solveSymbolReferringToValue","pass":true,"statements":[{"sl":35}]},"test_248":{"methods":[{"sl":34}],"name":"resolveTypeUsageOfMethodInGenericClass","pass":true,"statements":[{"sl":35}]},"test_25":{"methods":[{"sl":34}],"name":"testDirectAncestorsOfInterfaceExtendingInterface","pass":true,"statements":[{"sl":35}]},"test_260":{"methods":[{"sl":34}],"name":"solveMethodWithAmbiguosCall","pass":true,"statements":[{"sl":35}]},"test_261":{"methods":[{"sl":34}],"name":"resolveCascadeOfReferencesToMethod","pass":true,"statements":[{"sl":35}]},"test_262":{"methods":[{"sl":34}],"name":"resolveReferenceToMethodWithLambda","pass":true,"statements":[{"sl":35}]},"test_284":{"methods":[{"sl":34}],"name":"resolveLambdaType","pass":true,"statements":[{"sl":35}]},"test_296":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfInterfaceUnqualifiedDifferentPackage","pass":true,"statements":[{"sl":35}]},"test_300":{"methods":[{"sl":34}],"name":"solveMethodInInterfaceParent","pass":true,"statements":[{"sl":35}]},"test_302":{"methods":[{"sl":34}],"name":"resolveReferenceToJreType","pass":true,"statements":[{"sl":35}]},"test_305":{"methods":[{"sl":34}],"name":"testGetAllSuperclassesWithoutTypeParameters","pass":true,"statements":[{"sl":35}]},"test_306":{"methods":[{"sl":34}],"name":"testSolveMethodNotExistingBecauseOfTypeParameters","pass":true,"statements":[{"sl":35}]},"test_312":{"methods":[{"sl":34}],"name":"testGetAllSuperclassesWithTypeParameters","pass":true,"statements":[{"sl":35}]},"test_319":{"methods":[{"sl":34}],"name":"typeParamOnReturnType","pass":true,"statements":[{"sl":35}]},"test_324":{"methods":[{"sl":34}],"name":"issue1482","pass":true,"statements":[{"sl":35}]},"test_331":{"methods":[{"sl":34}],"name":"testGetAllAncestorsOnRawType","pass":true,"statements":[{"sl":35}]},"test_353":{"methods":[{"sl":34}],"name":"testDirectAncestorsOfClassWithSuperClass","pass":true,"statements":[{"sl":35}]},"test_359":{"methods":[{"sl":34}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":35}]},"test_367":{"methods":[{"sl":34}],"name":"testTypeParamValue","pass":true,"statements":[{"sl":35}]},"test_373":{"methods":[{"sl":34}],"name":"personsStream","pass":true,"statements":[{"sl":35}]},"test_375":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfClassQualifiedDifferentPackage","pass":true,"statements":[{"sl":35}]},"test_377":{"methods":[{"sl":34}],"name":"testGetConstructors","pass":true,"statements":[{"sl":35}]},"test_384":{"methods":[{"sl":34}],"name":"lambdaMap","pass":true,"statements":[{"sl":35}]},"test_388":{"methods":[{"sl":34}],"name":"testSolveStaticallyImportedMemberType","pass":true,"statements":[{"sl":35}]},"test_39":{"methods":[{"sl":78}],"name":"isMethod","pass":true,"statements":[{"sl":79}]},"test_392":{"methods":[{"sl":34}],"name":"solveMethodWithClassExpressionAsParameter","pass":true,"statements":[{"sl":35}]},"test_406":{"methods":[{"sl":34}],"name":"resolveTypeUsageOfCascadeMethodInGenericClass","pass":true,"statements":[{"sl":35}]},"test_411":{"methods":[{"sl":34}],"name":"lambdaPrint","pass":true,"statements":[{"sl":35}]},"test_413":{"methods":[{"sl":34}],"name":"solveSymbolAsValueReferringToValue","pass":true,"statements":[{"sl":35}]},"test_417":{"methods":[{"sl":34}],"name":"functionUsedInStream","pass":true,"statements":[{"sl":35}]},"test_421":{"methods":[{"sl":34}],"name":"testGetDeclaredMethods","pass":true,"statements":[{"sl":35}]},"test_423":{"methods":[{"sl":34}],"name":"testDirectAncestorsOfClassWithInterfaces","pass":true,"statements":[{"sl":35}]},"test_429":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfClassUnqualifiedDifferentPackage","pass":true,"statements":[{"sl":35}]},"test_433":{"methods":[{"sl":34}],"name":"testGetComplexBounds","pass":true,"statements":[{"sl":35}]},"test_435":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfInterfaceQualifiedSamePackage","pass":true,"statements":[{"sl":35}]},"test_438":{"methods":[{"sl":34}],"name":"testReplaceTypeVariables","pass":true,"statements":[{"sl":35}]},"test_446":{"methods":[{"sl":34}],"name":"lambdaFlatMapIssue","pass":true,"statements":[{"sl":35}]},"test_450":{"methods":[{"sl":34}],"name":"testGetAllSuperclasses","pass":true,"statements":[{"sl":35}]},"test_455":{"methods":[{"sl":34}],"name":"checkReflectionConstructorSignature","pass":true,"statements":[{"sl":35}]},"test_456":{"methods":[{"sl":34}],"name":"typeParamOnReturnTypeStep3","pass":true,"statements":[{"sl":35}]},"test_460":{"methods":[{"sl":34}],"name":"compatibilityShouldConsiderAlsoTypeVariablesNegative","pass":true,"statements":[{"sl":35}]},"test_461":{"methods":[{"sl":34}],"name":"resolveInheritedFieldFromInterface","pass":true,"statements":[{"sl":35}]},"test_467":{"methods":[{"sl":34}],"name":"findAllInheritedFieldsAndGenerics","pass":true,"statements":[{"sl":35}]},"test_474":{"methods":[{"sl":34}],"name":"compatibilityShouldConsiderAlsoTypeVariablesRaw","pass":true,"statements":[{"sl":35}]},"test_477":{"methods":[{"sl":34}],"name":"lambdaCollectParam","pass":true,"statements":[{"sl":35}]},"test_48":{"methods":[{"sl":34}],"name":"test_Integer","pass":true,"statements":[{"sl":35}]},"test_488":{"methods":[{"sl":34}],"name":"issue1485withoutSpecifyingJARs","pass":true,"statements":[{"sl":35}]},"test_490":{"methods":[{"sl":34}],"name":"test","pass":true,"statements":[{"sl":35}]},"test_492":{"methods":[{"sl":34}],"name":"testGetAllFields","pass":true,"statements":[{"sl":35}]},"test_498":{"methods":[{"sl":34}],"name":"testGetAllAncestorsConsideringTypeParameters","pass":true,"statements":[{"sl":35}]},"test_502":{"methods":[{"sl":34}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":35}]},"test_503":{"methods":[{"sl":34}],"name":"getParam_forMethodParameterWithTypeParameter","pass":true,"statements":[{"sl":35}]},"test_510":{"methods":[{"sl":53}],"name":"isVariable","pass":true,"statements":[{"sl":54}]},"test_53":{"methods":[{"sl":34}],"name":"testHasDirectlyAnnotationPositive","pass":true,"statements":[{"sl":35}]},"test_534":{"methods":[{"sl":34}],"name":"enumAndStaticInitializer","pass":true,"statements":[{"sl":35}]},"test_544":{"methods":[{"sl":34}],"name":"compatibilityShouldConsiderAlsoTypeVariablesPositive","pass":true,"statements":[{"sl":35}]},"test_546":{"methods":[{"sl":34}],"name":"testGetAllInterfaces","pass":true,"statements":[{"sl":35}]},"test_548":{"methods":[{"sl":34}],"name":"lambdaBifunc","pass":true,"statements":[{"sl":35}]},"test_551":{"methods":[{"sl":34}],"name":"resolveReferenceToLambdaParam","pass":true,"statements":[{"sl":35}]},"test_553":{"methods":[{"sl":34}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":35}]},"test_554":{"methods":[{"sl":34}],"name":"accessEnumMethodThroughThis","pass":true,"statements":[{"sl":35}]},"test_557":{"methods":[{"sl":34}],"name":"issue7","pass":true,"statements":[{"sl":35}]},"test_561":{"methods":[{"sl":34}],"name":"testGetAllAncestorsWithTypeParameters","pass":true,"statements":[{"sl":35}]},"test_566":{"methods":[{"sl":34}],"name":"classCast","pass":true,"statements":[{"sl":35}]},"test_569":{"methods":[{"sl":34}],"name":"resolveDoubleNestedClassType","pass":true,"statements":[{"sl":35}]},"test_573":{"methods":[{"sl":34}],"name":"resolveSimpleGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":35}]},"test_578":{"methods":[{"sl":34}],"name":"resolveMethodReferenceExpr","pass":true,"statements":[{"sl":35}]},"test_579":{"methods":[{"sl":34}],"name":"genericCollectionWithWildcardsAndExtensions","pass":true,"statements":[{"sl":35}]},"test_583":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfInterfaceUnqualifiedSamePackage","pass":true,"statements":[{"sl":35}]},"test_585":{"methods":[{"sl":34}],"name":"testGetAllAncestorsOnTypeWithSpecifiedTypeParametersForClassAbstractList","pass":true,"statements":[{"sl":35}]},"test_588":{"methods":[{"sl":34}],"name":"testGetGenericReturnType","pass":true,"statements":[{"sl":35}]},"test_591":{"methods":[{"sl":34}],"name":"methodWithGenericParameterTypes","pass":true,"statements":[{"sl":35}]},"test_608":{"methods":[{"sl":34}],"name":"resolveUsageOfMethodOfGenericClassWithExtendsWildcard","pass":true,"statements":[{"sl":35}]},"test_610":{"methods":[{"sl":34}],"name":"testGetAllGenericFields","pass":true,"statements":[{"sl":35}]},"test_611":{"methods":[{"sl":34}],"name":"getParam_forMethodParameterWithGenericType","pass":true,"statements":[{"sl":35}]},"test_612":{"methods":[{"sl":34}],"name":"typeDeclarationSuperClassImplicitlyIncludeObject","pass":true,"statements":[{"sl":35}]},"test_613":{"methods":[{"sl":34}],"name":"accessEnumFieldThroughThis","pass":true,"statements":[{"sl":35}]},"test_616":{"methods":[{"sl":34}],"name":"lambdaReduce","pass":true,"statements":[{"sl":35}]},"test_617":{"methods":[{"sl":34}],"name":"usingAnonymousSuperClassInnerType","pass":true,"statements":[{"sl":35}]},"test_618":{"methods":[{"sl":34}],"name":"noVariablesArePlacedWhenNotNeeded","pass":true,"statements":[{"sl":35}]},"test_619":{"methods":[{"sl":34}],"name":"testGetConstructors","pass":true,"statements":[{"sl":35}]},"test_62":{"methods":[{"sl":34}],"name":"resolveMethodOnGenericClass","pass":true,"statements":[{"sl":35}]},"test_622":{"methods":[{"sl":34}],"name":"solveSymbolReferringToDeclaredInstanceField","pass":true,"statements":[{"sl":35}]},"test_625":{"methods":[{"sl":34}],"name":"solveParameterOfLambdaInMethodCallExpr","pass":true,"statements":[{"sl":35}]},"test_636":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfClassUnqualifiedSamePackage","pass":true,"statements":[{"sl":35}]},"test_657":{"methods":[{"sl":34}],"name":"resolveStringReturnType","pass":true,"statements":[{"sl":35}]},"test_66":{"methods":[{"sl":34}],"name":"testIsAssignableByGenerics","pass":true,"statements":[{"sl":35}]},"test_675":{"methods":[{"sl":34}],"name":"testGetAllAncestorsOnTypeWithSpecifiedTypeParametersForInterface","pass":true,"statements":[{"sl":35}]},"test_680":{"methods":[{"sl":34}],"name":"resolveUsageOfGenericFieldAdvancedCase","pass":true,"statements":[{"sl":35}]},"test_681":{"methods":[{"sl":34}],"name":"testGetAllAncestorsWithoutTypeParameters","pass":true,"statements":[{"sl":35}]},"test_682":{"methods":[{"sl":34}],"name":"testConsistentMethodResultion","pass":true,"statements":[{"sl":35}]},"test_684":{"methods":[{"sl":34}],"name":"testGetGenericParameters","pass":true,"statements":[{"sl":35}]},"test_687":{"methods":[{"sl":34}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":35}]},"test_69":{"methods":[{"sl":34}],"name":"resolveReferenceToCallOnLambdaParam","pass":true,"statements":[{"sl":35}]},"test_691":{"methods":[{"sl":34}],"name":"lambdaPrimitivesIssue","pass":true,"statements":[{"sl":35}]},"test_697":{"methods":[{"sl":34}],"name":"solveMethodForAnnotationWithValue","pass":true,"statements":[{"sl":35}]},"test_70":{"methods":[{"sl":34}],"name":"issueWithInternalEnumConstantReference","pass":true,"statements":[{"sl":35}]},"test_705":{"methods":[{"sl":34}],"name":"biFunctionUsedInStream","pass":true,"statements":[{"sl":35}]},"test_706":{"methods":[{"sl":34}],"name":"testReplaceTypeVariablesWithLambdaInBetween","pass":true,"statements":[{"sl":35}]},"test_709":{"methods":[{"sl":34}],"name":"testGetAncestorsWithTypeParameters","pass":true,"statements":[{"sl":35}]},"test_71":{"methods":[{"sl":34}],"name":"resolveReferenceToLambdaParamBase","pass":true,"statements":[{"sl":35}]},"test_711":{"methods":[{"sl":34}],"name":"solveSymbolReferringToDeclaredStaticField","pass":true,"statements":[{"sl":35}]},"test_712":{"methods":[{"sl":34}],"name":"doTest_withJavaParserFacade_explicit","pass":true,"statements":[{"sl":35}]},"test_714":{"methods":[{"sl":34}],"name":"testGetAllInterfacesWithParameters","pass":true,"statements":[{"sl":35}]},"test_717":{"methods":[{"sl":34}],"name":"resolveUsageOfGenericFieldIntermediateCase","pass":true,"statements":[{"sl":35}]},"test_719":{"methods":[{"sl":34},{"sl":46}],"name":"resolveEnumConstantAccess","pass":true,"statements":[{"sl":35},{"sl":47}]},"test_72":{"methods":[{"sl":34}],"name":"testAllAncestors","pass":true,"statements":[{"sl":35}]},"test_724":{"methods":[{"sl":34}],"name":"solveSymbolAsValueReferringToDeclaredInstanceField","pass":true,"statements":[{"sl":35}]},"test_729":{"methods":[{"sl":34}],"name":"testGetFunctionalMethodPositiveCasesOnInterfaces","pass":true,"statements":[{"sl":35}]},"test_730":{"methods":[{"sl":57}],"name":"isEnumConstant","pass":true,"statements":[{"sl":58}]},"test_748":{"methods":[{"sl":34}],"name":"testGetAllAncestorsOnTypeWithSpecifiedTypeParametersForClassArrayList","pass":true,"statements":[{"sl":35}]},"test_75":{"methods":[{"sl":34}],"name":"resolveNestedGenericReturnTypeOfMethodInJar","pass":true,"statements":[{"sl":35}]},"test_751":{"methods":[{"sl":34}],"name":"staticFieldCallsFromInnerClasses","pass":true,"statements":[{"sl":35}]},"test_755":{"methods":[{"sl":34}],"name":"testGetAllInterfacesWithoutParameters","pass":true,"statements":[{"sl":35}]},"test_757":{"methods":[{"sl":34}],"name":"testGetDeclaredMethods","pass":true,"statements":[{"sl":35}]},"test_768":{"methods":[{"sl":34}],"name":"testParameterNameOnClassesFromTheStdLibrary","pass":true,"statements":[{"sl":35}]},"test_776":{"methods":[{"sl":34}],"name":"typeOfVoidLambda","pass":true,"statements":[{"sl":35}]},"test_780":{"methods":[{"sl":34}],"name":"usingAnonymousClassInnerType","pass":true,"statements":[{"sl":35}]},"test_782":{"methods":[{"sl":34}],"name":"lambdaBlockMultiLineReturn","pass":true,"statements":[{"sl":35}]},"test_788":{"methods":[{"sl":34}],"name":"resolveExpressions","pass":true,"statements":[{"sl":35}]},"test_789":{"methods":[{"sl":34}],"name":"testHasAnnotation","pass":true,"statements":[{"sl":35}]},"test_794":{"methods":[{"sl":34}],"name":"biFunctionInMethodCall","pass":true,"statements":[{"sl":35}]},"test_797":{"methods":[{"sl":34}],"name":"lambdaMapParameter","pass":true,"statements":[{"sl":35}]},"test_80":{"methods":[{"sl":34}],"name":"testGetSignature","pass":true,"statements":[{"sl":35}]},"test_81":{"methods":[{"sl":34}],"name":"consumerDeclaredInMethod","pass":true,"statements":[{"sl":35}]},"test_823":{"methods":[{"sl":34}],"name":"resolveFieldOfEnumAsInternalClassOfClassQualifiedSamePackage","pass":true,"statements":[{"sl":35}]},"test_830":{"methods":[{"sl":34}],"name":"methodTypeParams","pass":true,"statements":[{"sl":35}]},"test_837":{"methods":[{"sl":34}],"name":"resolveElementOfListAdvancedExample","pass":true,"statements":[{"sl":35}]},"test_839":{"methods":[{"sl":34}],"name":"testGetAllMethods","pass":true,"statements":[{"sl":35}]},"test_85":{"methods":[{"sl":34}],"name":"testGetDeclaredMethods","pass":true,"statements":[{"sl":35}]},"test_857":{"methods":[{"sl":34}],"name":"testSolveMethodExisting","pass":true,"statements":[{"sl":35}]},"test_861":{"methods":[{"sl":34}],"name":"testAsDescribe","pass":true,"statements":[{"sl":35}]},"test_867":{"methods":[{"sl":34}],"name":"solveMethodAsUsageWithAmbiguosCall","pass":true,"statements":[{"sl":35}]},"test_869":{"methods":[{"sl":34}],"name":"testAllAncestors","pass":true,"statements":[{"sl":35}]},"test_872":{"methods":[{"sl":34}],"name":"nodesTypeIsCorrect","pass":true,"statements":[{"sl":35}]},"test_873":{"methods":[{"sl":34}],"name":"getParam_forMethodParameterWithRawType","pass":true,"statements":[{"sl":35}]},"test_94":{"methods":[{"sl":34}],"name":"resolveFieldOfGenericReferringToVariableType","pass":true,"statements":[{"sl":35}]},"test_96":{"methods":[{"sl":34}],"name":"staticMethod","pass":true,"statements":[{"sl":35}]},"test_99":{"methods":[{"sl":34}],"name":"testOverloadedMethods","pass":true,"statements":[{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [551, 782, 714, 160, 585, 446, 261, 435, 423, 474, 612, 262, 429, 85, 319, 192, 81, 455, 467, 306, 433, 788, 164, 240, 872, 490, 140, 588, 591, 488, 546, 477, 177, 302, 608, 17, 300, 636, 675, 461, 19, 296, 456, 684, 554, 417, 53, 682, 155, 503, 71, 80, 583, 377, 305, 69, 492, 625, 869, 561, 861, 373, 680, 353, 438, 611, 618, 857, 367, 392, 70, 837, 406, 221, 413, 502, 48, 195, 757, 548, 681, 312, 212, 260, 176, 375, 411, 203, 25, 196, 175, 619, 776, 724, 780, 180, 246, 248, 324, 709, 72, 94, 498, 748, 284, 712, 717, 331, 691, 729, 622, 687, 768, 105, 706, 13, 460, 129, 137, 384, 613, 75, 797, 165, 610, 830, 867, 711, 789, 751, 697, 657, 188, 96, 99, 566, 823, 873, 534, 839, 388, 719, 569, 794, 62, 544, 66, 234, 557, 579, 616, 421, 359, 214, 755, 233, 450, 578, 617, 705, 573, 553], [551, 782, 714, 160, 585, 446, 261, 435, 423, 474, 612, 262, 429, 85, 319, 192, 81, 455, 467, 306, 433, 788, 164, 240, 872, 490, 140, 588, 591, 488, 546, 477, 177, 302, 608, 17, 300, 636, 675, 461, 19, 296, 456, 684, 554, 417, 53, 682, 155, 503, 71, 80, 583, 377, 305, 69, 492, 625, 869, 561, 861, 373, 680, 353, 438, 611, 618, 857, 367, 392, 70, 837, 406, 221, 413, 502, 48, 195, 757, 548, 681, 312, 212, 260, 176, 375, 411, 203, 25, 196, 175, 619, 776, 724, 780, 180, 246, 248, 324, 709, 72, 94, 498, 748, 284, 712, 717, 331, 691, 729, 622, 687, 768, 105, 706, 13, 460, 129, 137, 384, 613, 75, 797, 165, 610, 830, 867, 711, 789, 751, 697, 657, 188, 96, 99, 566, 823, 873, 534, 839, 388, 719, 569, 794, 62, 544, 66, 234, 557, 579, 616, 421, 359, 214, 755, 233, 450, 578, 617, 705, 573, 553], [], [], [], [], [], [], [], [], [], [], [719], [719], [], [], [], [], [], [510], [510], [], [], [730], [730], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39], [39], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
