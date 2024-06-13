function FeatureItem(props) {
    const { imgSrc, alt, title, text, secondtitle, competences1, competences2, competences3, imgicon, alticon } = props;
    return (
        <article>
        <div className="home_gallery">
      <a href="https://github.com/Zatayi/ohmyfood" target="_blank" rel="noopener noreferrer">
    <img src={imgSrc} alt={alt} />
    <div className="description">
        <h2 className="feature-item-title">{title}</h2>
        <p>{text}</p>
        <h3 className="comp-title">{secondtitle}</h3>
        <div className="icon-list" >
        <img src={imgicon} className="icon"alt={alticon}/>
        </div>
        <li>{competences1}</li>
        <li>{competences2}</li>
        <li>{competences3}</li>
    </div>
  </a>
        </div>
        </article>
    );
}

export default FeatureItem;