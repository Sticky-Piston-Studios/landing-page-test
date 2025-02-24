import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/BannerSlider';
import Feature from '~/components/Feature';
import Subscribe from '~/components/Subscribe';
import Footer from '~/components/Footer';
import Corner from '~/components/Corner';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';
import GalleryWidget from '~/components/Blog/Sidebar/GalleryWidget';

// BAR layout (from left to right)
// logo -> odnosniki do tego co tu mamy -> login/register albo CTA bar

// MODEL LAYOUT
// logo
// call to action
// 3 guys
// smieszny przelacznik
// galeryjka
// contact
// footer
//
function Landing(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="subscribe">
            <Subscribe />
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottomShort)} id="feature">
            <Feature />
          </section>
          <section id="gallery">
            <GalleryWidget />
          </section>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
