import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { searchClient } from '../utils/utils';
import { InstantSearch } from "react-instantsearch-dom";
import { Container, Title, CustomSearchBox, StyledHits, StyledHighlight, H3, H4 } from './../styles/styles';

const Home: NextPage = () => {

  const Hit= ({hit}:any) => {
    const { data_company } = hit;
    const { company_name, company_logo } = data_company;
    return (
      <div>
        <Image src={company_logo} width="300" height="300"alt="company" />
        <H3>Company Name: <span>{company_name}</span></H3>
        <H4>
          Job Title: <StyledHighlight attribute="data_job.job_title" hit={hit} className="highlight" />
          </H4>
      </div>
    );
  };

  return (
    <Container>
      <Head>
        <title>Job Search - Home</title>
        <meta name="description" content="Search your dream job." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Title>inploi Test Application</Title>

      <InstantSearch indexName={`${process.env.NEXT_PUBLIC_INDEX_NAME}`} searchClient={searchClient} onSearchStateChange={(e) => console.log("stateChanged", e)}>
          <CustomSearchBox
            className="search-bar"
            translations={{ placeholder: "Search for anything...", }}
          />
          <StyledHits hitComponent={Hit} />
        </InstantSearch>

      </main>
    </Container>
  )
}

export default Home
