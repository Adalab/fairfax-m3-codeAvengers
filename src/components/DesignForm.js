import React from 'react';

class DesignForm extends React.Component {
    render() {
        return (
            <div id="design-container" className="design__container--palette collapsible__container">
                <div>
                    <h3 className="design__title--colors">colores</h3>

                </div>
                <div> <a href className="design__palette-colors">
                    <label className="design__palette palette1" for="settings__palette1">
                        <input className="desidn__radio" value="1" type="radio" id="settings__palette1" name="color" checked />
                        <ul className="design__list">
                            <li className="list__color" style={{ backgroundColor: "#114e4e" }}></li>
                            <li className="list__color" style={{ backgroundColor: "#438792" }}></li>
                            <li className="list__color" style={{ backgroundColor: "#a2deaf" }}></li>
                        </ul>
                    </label>
                </a>
                    <a href className="design__palette-colors">
                        <label className="design__palette palette2" for="settings__palette2">
                            <input className="desidn__radio" type="radio" id="settings__palette2" value="2" name="color" />
                            <ul className="design__list">
                                <li className="list__color" style={{ backgroundColor: "#420101" }}></li>
                                <li className="list__color" style={{ backgroundColor: "#bd1010" }}></li>
                                <li className="list__color" style={{ backgroundColor: "#e95626" }}></li>
                            </ul>
                        </label>
                    </a>
                    <a href className="design__palette-colors">
                        <label className="design__palette palette3" for="settings__palette3">
                            <input className="desidn__radio" value="3" type="radio" id="settings__palette3" name="color" />
                            <ul className="design__list">
                                <li className="list__color" style={{ backgroundColor: "#3e5b65" }}></li>
                                <li className="list__color" style={{ backgroundColor: "#dfe5eb" }}></li>
                                <li className="list__color" style={{ backgroundColor: "#a0c0cf" }}></li>
                            </ul>
                        </label>
                    </a>

                </div>
            </div>
        )
    }
}

export default DesignForm;