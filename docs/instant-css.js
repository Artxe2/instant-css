(async () => {
	let style = `*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
html,body{height:100%;max-height:100%}
ol,ul,menu,dir{list-style:none}
img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}
button{background:none;border:0;cursor:pointer}
b,strong{font-weight:bold}
a{text-decoration:none}
pre{white-space:pre-wrap}
table{border-collapse:collapse;border-spacing:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
`
	let abbrKeys = new Map([
		["acc","accent-color"],
		["ac","align-content"],
		["ai","align-items"],
		["as","align-self"],
		//["a","all"],
		["a","animation"],
		//["a","animation-delay"],
		//["a","animation-direction"],
		//["a","animation-duration"],
		//["a","animation-fill-mode"],
		//["a","animation-iteration-count"],
		//["a","animation-name"],
		//["a","animation-play-state"],
		//["a","animation-timing-function"],
		["bf","backdrop-filter"],
		//["b","backface-visibility"],
		["bg","background"],
		//["b","background-attachment"],
		//["b","background-blend-mode"],
		//["b","background-clip"],
		["bgc","background-color"],
		["bgi","background-image"],
		//["b","background-origin"],
		["bgp","background-position"],
		["bgr","background-repeat"],
		["bgs","background-size"],
		//["b","block-size"],
		["bd","border"],
		//["b","border-block-end"],
		//["b","border-block-end-color"],
		//["b","border-block-end-style"],
		//["b","border-block-end-width"],
		//["b","border-block-start"],
		//["b","border-block-start-color"],
		//["b","border-block-start-style"],
		//["b","border-block-start-width"],
		["bdb","border-bottom"],
		//["b","border-bottom-color"],
		//["b","border-bottom-left-radius"],
		//["b","border-bottom-right-radius"],
		//["b","border-bottom-style"],
		//["b","border-bottom-width"],
		//["b","border-collapse"],
		//["b","border-color"],
		//["b","border-image"],
		//["b","border-image-outset"],
		//["b","border-image-repeat"],
		//["b","border-image-slice"],
		//["b","border-image-source"],
		//["b","border-image-width"],
		//["b","border-inline-end"],
		//["b","border-inline-end-color"],
		//["b","border-inline-end-style"],
		//["b","border-inline-end-width"],
		//["b","border-inline-start"],
		//["b","border-inline-start-color"],
		//["b","border-inline-start-style"],
		//["b","border-inline-start-width"],
		["bdl","border-left"],
		//["b","border-left-color"],
		//["b","border-left-style"],
		//["b","border-left-width"],
		["br","border-radius"],
		["bdr","border-right"],
		//["b","border-right-color"],
		//["b","border-right-style"],
		//["b","border-right-width"],
		//["b","border-spacing"],
		//["b","border-style"],
		["bdt","border-top"],
		//["b","border-top-color"],
		//["b","border-top-left-radius"],
		//["b","border-top-right-radius"],
		//["b","border-top-style"],
		//["b","border-top-width"],
		//["b","border-width"],
		["b","bottom"],
		//["b","box-decoration-break"],
		["bs","box-shadow"],
		//["b","box-sizing"],
		//["b","break-after"],
		//["b","break-before"],
		//["b","break-inside"],
		//["c","caption-side"],
		//["c","caret-color"],
		//["c","clear"],
		//["c","clip"],
		//["c","clip-path"],
		["c","color"],
		//["c","column-count"],
		//["c","column-fill"],
		//["c","column-gap"],
		//["c","column-rule"],
		//["c","column-rule-color"],
		//["c","column-rule-style"],
		//["c","column-rule-width"],
		//["c","column-span"],
		//["c","column-width"],
		//["c","columns"],
		["ct","content"],
		//["c","counter-increment"],
		//["c","counter-reset"],
		["cs","cursor"],
		//["d","direction"],
		["d","display"],
		//["e","empty-cells"],
		["f","fill"],
		["ft","filter"],
		//["f","flex"],
		//["f","flex-basis"],
		//["f","flex-direction"],
		//["f","flex-flow"],
		["fg","flex-grow"],
		["fsk","flex-shrink"],
		//["f","flex-wrap"],
		["fl","float"],
		//["f","font"],
		["ff","font-family"],
		//["f","font-feature-settings"],
		//["f","font-kerning"],
		//["f","font-language-override"],
		["fs","font-size"],
		//["f","font-size-adjust"],
		//["f","font-stretch"],
		//["f","font-style"],
		//["f","font-synthesis"],
		["fv","font-variant"],
		//["f","font-variant-caps"],
		//["f","font-variant-east-asian"],
		//["f","font-variant-ligatures"],
		//["f","font-variant-numeric"],
		//["f","font-variant-position"],
		["fw","font-weight"],
		["g","gap"],
		//["g","grid"],
		//["g","grid-area"],
		//["g","grid-auto-columns"],
		//["g","grid-auto-flow"],
		//["g","grid-auto-rows"],
		["gc","grid-column"],
		//["g","grid-column-end"],
		//["g","grid-column-gap"],
		//["g","grid-column-start"],
		["gr","grid-row"],
		//["g","grid-row-end"],
		//["g","grid-row-gap"],
		//["g","grid-row-start"],
		//["g","grid-template"],
		//["g","grid-template-areas"],
		["gtc","grid-template-columns"],
		["gtr","grid-template-rows"],
		//["h","hanging-punctuation"],
		["h","height"],
		//["h","hyphens"],
		//["i","image-rendering"],
		["i","inset"],
		//["i","isolation"],
		["jc","justify-content"],
		["l","left"],
		//["l","letter-spacing"],
		//["l","line-break"],
		["lh","line-height"],
		["ls","list-style"],
		//["l","list-style-image"],
		//["l","list-style-position"],
		//["l","list-style-type"],
		["m","margin"],
		//["m","margin-block-end"],
		//["m","margin-block-start"],
		["mb","margin-bottom"],
		//["m","margin-inline-end"],
		//["m","margin-inline-start"],
		["ml","margin-left"],
		["mr","margin-right"],
		["mt","margin-top"],
		//["m","mask"],
		//["m","mask-clip"],
		//["m","mask-composite"],
		//["m","mask-image"],
		//["m","mask-mode"],
		//["m","mask-origin"],
		//["m","mask-position"],
		//["m","mask-repeat"],
		//["m","mask-size"],
		//["m","mask-type"],
		//["m","max-block-size"],
		["xh","max-height"],
		//["m","max-inline-size"],
		["xw","max-width"],
		//["m","min-block-size"],
		["mh","min-height"],
		//["m","min-inline-size"],
		["mw","min-width"],
		//["m","mix-blend-mode"],
		//["o","object-fit"],
		//["o","object-position"],
		//["o","offset"],
		//["o","offset-anchor"],
		//["o","offset-distance"],
		//["o","offset-path"],
		//["o","offset-position"],
		//["o","offset-rotate"],
		["op","opacity"],
		//["o","order"],
		//["o","orphans"],
		["ol","outline"],
		//["o","outline-color"],
		//["o","outline-offset"],
		//["o","outline-style"],
		//["o","outline-width"],
		["o","overflow"],
		["ocm","overflow-clip-margin"],
		["ow","overflow-wrap"],
		["ox","overflow-x"],
		["oy","overflow-y"],
		["p","padding"],
		//["p","padding-block-end"],
		//["p","padding-block-start"],
		["pb","padding-bottom"],
		//["p","padding-inline-end"],
		//["p","padding-inline-start"],
		["pl","padding-left"],
		["pr","padding-right"],
		["pt","padding-top"],
		//["p","page-break-after"],
		//["p","page-break-before"],
		//["p","page-break-inside"],
		//["p","perspective"],
		//["p","perspective-origin"],
		//["p","pointer-events"],
		//["p","position"],
		//["q","quotes"],
		//["r","resize"],
		["r","right"],
		//["r","ruby-align"],
		//["r","ruby-merge"],
		//["r","ruby-position"],
		//["s","scroll-behavior"],
		//["s","scroll-margin"],
		//["s","scroll-margin-block"],
		//["s","scroll-margin-block-end"],
		//["s","scroll-margin-block-start"],
		//["s","scroll-margin-bottom"],
		//["s","scroll-margin-inline"],
		//["s","scroll-margin-inline-end"],
		//["s","scroll-margin-inline-start"],
		//["s","scroll-margin-left"],
		//["s","scroll-margin-right"],
		//["s","scroll-margin-top"],
		//["s","scroll-padding"],
		//["s","scroll-padding-block"],
		//["s","scroll-padding-block-end"],
		//["s","scroll-padding-block-start"],
		//["s","scroll-padding-bottom"],
		//["s","scroll-padding-inline"],
		//["s","scroll-padding-inline-end"],
		//["s","scroll-padding-inline-start"],
		//["s","scroll-padding-left"],
		//["s","scroll-padding-right"],
		//["s","scroll-padding-top"],
		["ssa","scroll-snap-align"],
		//["s","scroll-snap-stop"],
		["sst","scroll-snap-type"],
		//["s","scrollbar-color"],
		//["s","scrollbar-width"],
		//["s","shape-image-threshold"],
		//["s","shape-margin"],
		//["s","shape-outside"],
		//["t","tab-size"],
		//["t","table-layout"],
		["ta","text-align"],
		//["t","text-align-last"],
		//["t","text-combine-upright"],
		["td","text-decoration"],
		//["t","text-decoration-color"],
		//["t","text-decoration-line"],
		//["t","text-decoration-style"],
		//["t","text-indent"],
		//["t","text-justify"],
		//["t","text-orientation"],
		//["t","text-overflow"],
		["ts","text-shadow"],
		//["t","text-transform"],
		//["t","text-underline-position"],
		["t","top"],
		//["t","touch-action"],
		["tf","transform"],
		//["t","transform-box"],
		["tfo","transform-origin"],
		//["t","transform-style"],
		["tt","transition"],
		["ttd","transition-delay"],
		//["t","transition-duration"],
		//["t","transition-property"],
		["ttf","transition-timing-function"],
		//["u","unicode-bidi"],
		["us","user-select"],
		["va","vertical-align"],
		//["v","visibility"],
		["ws","white-space"],
		//["w","widows"],
		["w","width"],
		//["w","will-change"],
		["wb","word-break"],
		//["w","word-spacing"],
		["ww","word-wrap"],
		["wm","writing-mode"],
		["z","z-index"]
	])
	let abbrValues = new Map([
		/* cursor */
		["not-allowed","cursor:not-allowed"],
		["pointer","cursor:pointer"],
		["wait","cursor:wait"],
		/* display */
		["block","display:block"],
		["flex","display:flex"],
		["grid","display:grid"],
		["inline","display:inline"],
		["inline-block","display:inline-block"],
		["inline-flex","display:inline-flex"],
		["none","display:none"],
		/* flex-direction */
		["column","flex-direction:column"],
		["column-reverse","flex-direction:column-reverse"],
		["row","flex-direction:row"],
		["row-reverse","flex-direction:row-reverse"],
		/* font-weight */
		["bold","font-weight:bold"],
		/* position */
		["absolute","position:absolute"],
		["fixed","position:fixed"],
		["relative","position:relative"],
		["static","position:static"],
		["sticky","position:sticky"],
		/* visibility */
		["hidden","visibility:hidden"]
	])
	let abbrMedias = new Map([
		["dark","(prefers-color-scheme:dark)"],
		["sm","(min-width:640px)"],
		["md","(min-width:768px)"],
		["lg","(min-width:1024px)"],
		["xl","(min-width:1280px)"],
		["2xl","(min-width:1536px)"]
	])
	/* scroll-padding-block|scroll-margin-block|scroll-padding-inline|scroll-margin-inline|border-image-outset */
	let abbrUnits = /(?<=(^|;|-)(background|border|bottom|column-rule|end|flex-basis|gap|grid-template-(columns|rows)|height|inset|left|margin|offset-distance|origin|outline|padding|perspective|position|radius|right|shadow|(?<!tab-)size|spacing|start|text-indent|top|vertical-align|width):([^; ]* )*?-?(\d*\.)?\d+)(?=( |;|$))/g
	let defaultUnit = "em"
/* <- custom field
	core logic -> */
	let dom = document, escape = CSS.escape

	let styleSheet = dom.createElement("style")
	styleSheet.setAttribute("instant-css", "v0.6.7")
	styleSheet.textContent = "body{display:none}"
	dom.head.appendChild(styleSheet)

	let classes = new Set()
	let memo = new Set()
	let media = new Map()

	let compileStyle = (() => {
		let compileRaw = t => escape(t) + "{" + parseValue(t) + "}"
		let compileSpecial = t => escape(t) + t.replace(/(?<!\\)\/.+/, "").replace(/_/g, " ") + "{" + parseValue(t.replace(/.+?[^\\]\//, "")) + "}"
		let compileMedia = t => {
			let query = t.slice(1).replace(/(?<=.+)@.+/, "")
			let group = media.get(query)
			if (!group) {
				group = [parseQuery(query), ""]
				media.set(query, group)
			} else if (group[t]) return
			let name = t.replace(/.+@/, "")
			group[1] += "\n\t" + parsePriority(name) + "." + escape(t.replace(/(?<=..+@).+/, "")) + (/^[^a-z-]/.test(name) ? compileSpecial(name) : compileRaw(name))
		}
		let parsePriority = t => {
			if (!/!$/.test(t)) return ""
			let index = t.length - 2
			let prefix = "[class]"
			while (t.charAt(index--) === "!") prefix += "[class]"
			return prefix
		}
		let parseQuery = (() => {
			let abbrMedia = (() => {
				let r = "\\b("
				for (let k of abbrMedias.keys()) r += k + "|"
				r = new RegExp(r.slice(0, r.length - 1) + ")\\b", "g")
				return t => t.replace(r, s => abbrMedias.get(s))
			})()
			return t => {
				t = t.replace(/_/g, " ")
					.replace(/=/g, ":")
					.replace(/^@/, "media ")
					.replace(/^[^ ]+$/, s => "media " + s.replace(/^!/, "not "))
					.replace(/[^ ,]+:[^ ,]+/g, s => {
						if (/~/.test(s)) {
							let name = s.replace(/:.+/, "")
							let unit = s.replace(/.+~\d+/, "")
							return "(min-" + name + ":" + s.replace(/.+:|~.+/g, "") + unit + ") and (max-" + name + ":" + s.replace(/.+~|[^\d]+/g, "") + unit + ")"
						}
						return "(" + s + ")"
					})
				return "\n@" + abbrMedia(t) + "{"
			}
		})()
		let parseValue = (() => {
			let abbrKey = (() => {
				let r = "(?<=^|/|;)("
				for (let k of abbrKeys.keys()) r += k + "|"
				r = new RegExp(r.slice(0, r.length - 1) + ")(?=:)", "g")
				return t => t.replace(r, s => abbrKeys.get(s))
			})()
			let abbrValue = (() => {
				let r = "(?<=^|/|;)("
				for (let k of abbrValues.keys()) r += k + "|"
				r = new RegExp(r.slice(0, r.length - 1) + ")(?=;|$|!)", "g")
				return t => t.replace(r, s => abbrValues.get(s))
			})()
			let abbrUnit = t => t.replace(abbrUnits, defaultUnit)
			let abbrCalc = t => t.replace(/(?<=calc\(.+?)(?<! )[+-](?! )(?=.+?\))/g, s => " " + s + " ")
			let abbrVar = t => t.replace(/(?<!var\()--[^ ;,)]+/g, s => "var(" + s + ")")
			return t => abbrVar(
				abbrCalc(
					abbrUnit(
						abbrValue(
							abbrKey(
								t.replace(/_/g, " ").replace(/=/g, ":").replace(/!+$/, "")
							)
						)
					)
				)
			)
		})()
		return (() => {
			let r = ".+:.+|.+=.+"
			for (let k of abbrValues.keys()) r += "|" + k
			r = new RegExp(r)
			return t => {
				if (
					!r.test(t)
					|| !/^([^']*'[^']*'[^']*|[^'])*$/.test(t)
					|| !/^([^"]*"[^"]*"[^"]*|[^"])*$/.test(t)
					|| /\([^)]*$|\\$/.test(t)
				) return
				if (/^[^a-z-]/.test(t)) {
					if (/@.+@.+/.test(t)) compileMedia(t)
					else style += "\n" + parsePriority(t) + "." + compileSpecial(t)
				} else style += "\n" + parsePriority(t) + "." + compileRaw(t)
			}
		})()
	})()

	let buildStyleSheet = () => {
		requestAnimationFrame(() => {
			classes.forEach(t => (memo.size != memo.add(t).size) && compileStyle(t))
			let theme = localStorage.getItem("THEME")
			let temp = style
			for (let v of media.values()) {
				if (theme && /@media \(prefers-color-scheme:dark\){/.test(v[0])) {
					if (theme === "DARK") temp += v[1]
				} else {
					temp += v[0]
					temp += v[1]
					temp += "\n}"
				}
			}
			styleSheet.textContent = temp
		})
	}

	let colectClassList = target => {
		target.classList.forEach(c => classes.add(c))
		for (let e of target.getElementsByTagName('*')) e.classList.forEach(c => classes.add(c))
	}

	dom.addEventListener("readystatechange",
		() => {
			colectClassList(dom.body)
			buildStyleSheet()
			let elements = new Set()
			new MutationObserver(mrList => {
				let size = classes.size
				mrList.forEach(mr => {
					let target = mr.target
					if (elements.has(target)) return
					for (let e of elements) {
						let compare = target.compareDocumentPosition(e)
						if (!compare || compare & 8) return
						if (compare & 16) elements.delete(e)
					}
					elements.add(target)
				})
				for (let e of elements) colectClassList(e)
				elements.clear()
				classes.size != size && buildStyleSheet()
			}).observe(dom.body, {
				attributeFilter: ["class"],
				childList: 1,
				subtree: 1,
			})
		},
		{ once: 1 }
	)
	window.instantCss = () => buildStyleSheet()
})()