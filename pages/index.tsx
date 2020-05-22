import React, { useCallback, ChangeEventHandler, useState } from "react";
import Head from "next/head";

export default () => {
  const [url, setUrl] = useState("");

  const onUrlChanged = useCallback((e) => setUrl(e.target.value), []);
  const onButtonClick = useCallback(() => {
    window.location.href = url;
  }, [url]);

  return (
    <div className="container">
      <Head>
        <title>redirector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>リダイレクト君</h1>
          <div>
            <input type="text" size={100} onChange={onUrlChanged} />
          </div>
          <div>
            <input type="button" value="launch" onClick={onButtonClick} />
          </div>
        </div>
      </main>
    </div>
  );
};
