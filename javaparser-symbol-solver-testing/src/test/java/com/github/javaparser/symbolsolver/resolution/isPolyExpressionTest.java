package com.github.javaparser.symbolsolver.resolution;

import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.ast.body.ConstructorDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import com.github.javaparser.ast.expr.ObjectCreationExpr;
import com.github.javaparser.resolution.declarations.ResolvedConstructorDeclaration;
import com.github.javaparser.resolution.types.ResolvedType;
import com.github.javaparser.symbolsolver.javaparser.Navigator;
import com.github.javaparser.symbolsolver.javaparsermodel.JavaParserFacade;
import com.github.javaparser.symbolsolver.javaparsermodel.declarations.JavaParserConstructorDeclaration;
import com.github.javaparser.symbolsolver.model.resolution.SymbolReference;
import com.github.javaparser.symbolsolver.model.resolution.TypeSolver;
import com.github.javaparser.symbolsolver.model.typesystem.ReferenceTypeImpl;
import com.github.javaparser.symbolsolver.resolution.typeinference.ExpressionHelper;
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.github.javaparser.StaticJavaParser.parse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class isPolyExpressionTest extends AbstractResolutionTest {

    private TypeSolver ts;
    private ResolvedType stringType;

    @BeforeEach
    void setup() {
        ts = new ReflectionTypeSolver();
        stringType = new ReferenceTypeImpl(ts.solveType(String.class.getCanonicalName()), ts);
    }

    //§15.9
    // A class instance creation expression is a poly expression (§15.2) if it uses the diamond form for type
    // arguments to the class, and it appears in an assignment context or an invocation context (§5.2, §5.3).
    // Otherwise, it is a standalone expression.
    @Test
    void diamondFormObjectCreationExpressionTest() {
        /*
        CompilationUnit compilationUnit = parse(
                "import java.util.ArrayList; \n"
                        + "public class Class1 { \n"
                        + " public void method1() { \n"
                        + "  ArrayList<Integer> list; \n"
                        + "  list = new ArrayList<Integer>; \n"
                        + " } \n"
                        + "}");

        List<ObjectCreationExpr> exp = compilationUnit.findAll(ObjectCreationExpr.class);
        assertEquals(1, exp.size());
        assertNotEquals(false, ExpressionHelper.isPolyExpression(exp.get(0)));
        */
        CompilationUnit cu = parseSample("FilipTest");
        ClassOrInterfaceDeclaration dClass = Navigator.demandClass(cu, "FilipTest");
        MethodDeclaration method = Navigator.demandMethod(dClass, "method1");
        ObjectCreationExpr objectCreationExpr = method.getBody().get().getStatements().get(1)
                .asExpressionStmt().getExpression().asObjectCreationExpr();

        assertNotEquals(false, ExpressionHelper.isPolyExpression(objectCreationExpr));

        /*
        SymbolReference<ResolvedConstructorDeclaration> ref =
                JavaParserFacade.get(new ReflectionTypeSolver()).solve(objectCreationExpr);
        ConstructorDeclaration actualConstructor =
                ((JavaParserConstructorDeclaration) ref.getCorrespondingDeclaration()).getWrappedNode();

        ClassOrInterfaceDeclaration otherClazz = Navigator.demandClass(cu, "OtherClass");
        ConstructorDeclaration expectedConstructor = Navigator.demandConstructor(otherClazz, 0);

        assertEquals(expectedConstructor, actualConstructor);*/
    }

}
