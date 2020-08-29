class News {
    constructor(){}
    
    currentNews = '';
    
    setNews(input){
        this.currentNews = input;
    }

    getNews(){
        return this.currentNews;
    }
}

module.exports = News;