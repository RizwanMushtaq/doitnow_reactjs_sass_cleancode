import React from 'react'
import Style  from '../../scss/AppPageComponents/CalenderContainer.module.scss'

import arrowiconlogo from '../../images/Pfeilrechts.svg'

export default function CalenderContainer() {
    return (
        <div className={Style.container}>
            <div className={Style.monthDiv}>
                <div className={Style.previousMonth}>
                    <img src={arrowiconlogo} alt='previous' id='previousMonth'></img>
                </div>
                <div id='monthHeaderDiv'>month year</div>
                <div className={Style.nextMonth}>
                    <img src={arrowiconlogo} alt='previous' id='nextMonth'></img>
                </div>
            </div>
            <div className={Style.weekDiv}>
                <div>SO.</div>
                <div>MO.</div>
                <div>DI.</div>
                <div>MI.</div>
                <div>DO.</div>
                <div>FR.</div>
                <div>SA.</div>
            </div>
            <div className={Style.daysDiv} id={'daysDiv'}>
                <div>31</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
            </div>
        </div>
    )
}


