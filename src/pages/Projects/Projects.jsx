import { useSelector } from 'react-redux';
import WebPagePreview from '../../components/WebPreview/WebPreview';
import { sites } from '../../helpers/sites';
import styles from './Projects.module.css'
import { labels } from '../../helpers/labels';

export const Projects = () => {
  const lang = useSelector((state) => state.lang);

  return (
    <div className={styles.contPrinc}>
      {sites.map((site, index) => (
        <div key={index}>
          <WebPagePreview className={styles.preview} title={site.title} image={site.image} description={ site.description[lang]} goto={labels[lang].go_page} url={site.url} githubUrl={site.github} github={labels[lang].github}/>
        </div>
      ))}
    </div>
  )
}
