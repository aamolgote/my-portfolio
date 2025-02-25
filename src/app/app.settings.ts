import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Astera',       //theme name
        'teal-light', //indigo-light, teal-light, red-light, grey-light, blue-dark, green-dark, pink-dark, amber-dark
        true            //has header background image   
    )
}

