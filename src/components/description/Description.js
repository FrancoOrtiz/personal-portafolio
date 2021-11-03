import './desc.scss';
import {FormattedMessage} from 'react-intl';

export const Description = () => {
    return (
        <section id="description" className="desc-box">
            <div className="desc-contain">
                <h1 className="desc-title"><FormattedMessage id="descTitle" /></h1>
                <p className="description"><FormattedMessage id="descSubtitle" /></p>
            </div>
        </section>
    )
}