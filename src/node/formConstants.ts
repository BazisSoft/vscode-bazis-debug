export namespace bzConsts {

	export let Constructors = {
		NewForm: 'NewForm',
		NewButton: 'NewButton',
		NewNumber: 'NewNumber',
		NewBool: 'NewBool',
		NewString: 'NewString',
		NewCombo: 'NewCombo',
		NewGroup: 'NewGroup',
		NewImage: 'NewImage',
		NewSelector: 'NewSelector',
		NewMaterial: 'NewMaterial',
		NewButt: 'NewButt',
		NewFurniture: 'NewFurniture',
		NewLabel: 'NewLabel',
		NewColor: 'NewColor',
		NewSeparator: 'NewSeparator',
	};

	export function IsComponentConstructor(name: string): boolean {
		switch (name) {
			case Constructors.NewBool:
			case Constructors.NewButt:
			case Constructors.NewButton:
			case Constructors.NewColor:
			case Constructors.NewCombo:
			case Constructors.NewFurniture:
			case Constructors.NewGroup:
			case Constructors.NewImage:
			case Constructors.NewLabel:
			case Constructors.NewMaterial:
			case Constructors.NewNumber:
			case Constructors.NewSelector:
			case Constructors.NewSeparator:
			case Constructors.NewString:
				return true;
			default:
				return false;
		}
	}

	export class Layout {
		left: number;
		top: number;
		width: number;
		height: number;
	}

	export function NewDeclaration(name: string, type: string, caption?: string, l?: Layout): string {
		let result = `let ${name} = ${type}(${caption ? caption : ''});\n`;
		if (type != Constructors.NewForm && l)
			result += `${name}. SetLayout(${l.left}, ${l.top}, ${l.width}, ${l.height});\n`;
		return result;
	}


	export function GetConstantValue(variableName: string[]): string | undefined {
		if (variableName.length === 2){
			switch (variableName[0]){
				case 'AlignmentType':{
					return AlignmentType[variableName[1]];
				}
				case 'AlignType':{
					return AlignType[variableName[1]];
				}
				case 'WindowPosition':{
					return WindowPosition[variableName[1]];
				}
			}
		}
		return undefined
	}

	enum AlignmentType {
		Left = 0,
		Right = 1,
		Center = 2
	}

	enum AlignType {
		None = 0,
		Top = 1,
		Bottom = 2,
		Left = 3,
		Right = 4,
		Client = 5
	}

	enum WindowPosition{
		Default = 0,
		Left = 1,
		Right = 2
	}
}