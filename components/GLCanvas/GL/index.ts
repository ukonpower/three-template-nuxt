import * as ORE from 'ore-three';
import { MainScene } from './MainScene';

export class GL {

	private canvas: HTMLCanvasElement | null;
	private controller: ORE.Controller;

	constructor(canvas: HTMLCanvasElement) {

		this.canvas = canvas;

		/* ------------------------
			checkUA
		------------------------ */
		const ua = navigator.userAgent;
		window.isSP = (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('macintosh') > 0);
		window.isSP = window.isSP || navigator.platform === "iPad" || (navigator.platform === "MacIntel" && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator as any).standalone !== undefined);

		/* ------------------------
			init ORE
		------------------------ */

		this.controller = new ORE.Controller();
		this.controller.addLayer(new MainScene(), {
			name: 'Main',
			canvas: this.canvas
		});

	}

}