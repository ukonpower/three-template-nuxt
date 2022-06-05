import { GlobalManager } from "~/components/GLCanvas/MainScene/GlobalManager"

declare global {
	interface Window {
		gManager: GlobalManager,
		isSP: boolean
	}
}
