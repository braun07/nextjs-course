import { useRouter } from "next/router";

// nossodominio.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

  //envia um request pra API do backend
  //pra dar match nos novos itens com o newsId no database

    return <h1> the detail page</h1>;
}

export default DetailPage;
