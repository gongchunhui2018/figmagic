import { parseCssFromElement } from '../parseCssFromElement';

import { ProcessedSelfnamedCss } from '../../contracts/Css';

import { Element } from '../../contracts/Element';
import { TextElement } from '../../contracts/TextElement';

import { MsgProcessElementsCreatingElement } from '../../../frameworks/messages/messages';

import { ErrorProcessElementsWrongElementCount } from '../../../frameworks/errors/errors';

/**
 * @description Process CSS for layer with same name as self
 *
 * @param element Element
 * @param textElement Text element
 * @param css CSS string
 * @param imports Imports array
 * @param remSize Rem size
 * @param isTest A boolean for if this is a test or not
 */
export async function processCssSelfnamedLayer(
  element: Element,
  textElement: TextElement,
  css: string,
  imports: any[],
  remSize: number,
  isTest: boolean
): Promise<ProcessedSelfnamedCss> {
  let updatedCss = css;
  let updatedImports = imports;

  const MAIN_ELEMENT = element.children.filter((e) => e.name === element.name);
  const TEXT_ELEMENT = textElement;

  if (MAIN_ELEMENT[0]) {
    if (MAIN_ELEMENT.length !== 1)
      throw new Error(`${ErrorProcessElementsWrongElementCount} ${element.name}!`);

    const FIXED_NAME = MAIN_ELEMENT[0].name.replace(/\s/gi, '');
    console.log(MsgProcessElementsCreatingElement(MAIN_ELEMENT[0].name, FIXED_NAME));

    let elementStyling = await parseCssFromElement(
      MAIN_ELEMENT[0],
      TEXT_ELEMENT[0],
      remSize,
      isTest
    );

    updatedImports = updatedImports.concat(elementStyling.imports);
    updatedCss += elementStyling.css;
  }

  return { updatedCss, updatedImports };
}