import axios from 'axios';

const nytAPI = '6cce6e9e51be478e9fc325ddac6620fb';

const helpers = {

    runQuery: (term, start, end) => {

        const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytAPI}&q=';
        let queryUrl = queryUrlBase + term;

        if( parseInt(start) ){
            queryUrl = queryUrl + '&begin_date=' + start + '0101';
        }
        if( parseInt(end) ){
            queryUrl = queryUrl + '&end_date=' + end + '0101';
        }

        return axios.get(queryUrl).then((nytData) => {
            console.log(nytData.response.docs[0]);
            return nytData.response.docs[0];
        })
    }

};

export default helpers