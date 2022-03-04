import { useRouter } from "next/router";
import PageLayoutOne from "../../components/layout/pages/layout1";
import PageLayoutTwo from "../../components/layout/pages/layout2";

export async function getServerSideProps(context) {
    const pageurl = context.params.pageurl

    // Get Pages
    const jsonDataSolutionsPages = await fetch("http://localhost:8080/api/pages/front/bytype/solutions");
    const solutionsPages = await jsonDataSolutionsPages.json()
    const jsonDataIndustriesPages = await fetch("http://localhost:8080/api/pages/front/bytype/industries");
    const industriesPages = await jsonDataIndustriesPages.json()
    const jsonDataTestingPages = await fetch("http://localhost:8080/api/pages/front/bytype/testing");
    const testingPages = await jsonDataTestingPages.json()
    
    // Get Pages
    const jsonDataPages = await fetch("http://localhost:8080/api/pages/front/"+pageurl);
    const pages = await jsonDataPages.json()
    
    return { props: {
        pages: pages,
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages,
    } };
}

function IndustriesInnerPage(props) {
    const router = useRouter();
    //console.log(router.query.pageurl)
    const { pages, solutionsPages, industriesPages, testingPages } = props;
    return (
        <>
            { pages.data.layout === "layout_1" && <PageLayoutOne data={pages.data} response={[solutionsPages, industriesPages, testingPages]} /> }
            { pages.data.layout === "layout_2" && <PageLayoutTwo data={pages.data} response={[solutionsPages, industriesPages, testingPages]} /> }
        </>
    )
}

export default IndustriesInnerPage
