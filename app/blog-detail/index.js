"use client";

import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "@/app/backToTop";
import SingleBlog from "@/components/BlogDetails/BlogDetails";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";

const BlogDetailsPage = ({ getBlog }) => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Blog Details" text="Blog Details" />

          <SingleBlog getBlog={getBlog} />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default BlogDetailsPage;
