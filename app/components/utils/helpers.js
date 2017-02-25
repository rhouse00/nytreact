import axios from 'axios';

const nytAPI = '6cce6e9e51be478e9fc325ddac6620fb';

const helpers = {

    runQuery: (term, start, end) => {

        const queryUrlBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytAPI}&q=`;
        let queryUrl = queryUrlBase + term;

        if( parseInt(start) ){
            queryUrl = queryUrl + '&begin_date=' + start + '0101';
        }
        if( parseInt(end) ){
            queryUrl = queryUrl + '&end_date=' + end + '0101';
        }
        console.log(queryUrl);
        return axios.get(queryUrl).then((nytData) => {
            console.log(nytData.status);
            let results = [];
           
            for(var i = 0, x = nytData.data.response.docs.length; i < x; i++){
                let object = {
                    title: nytData.data.response.docs[i].headline.main,
                    link: nytData.data.response.docs[i].web_url
                };
                results.push(object);
            }
            
            return results;
        })
    }

};

export default helpers;