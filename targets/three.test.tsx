import React,{ReactType,useState} from 'react';
import * as three from 'three';
import {decapitalize} from '../shared/helpers'
import {apply} from './three';
import {subscribe} from './three';
import renderer from 'react-test-renderer';
import {renderer as renderThree, Canvas} from 'react-three-fiber';
import Enzyme,{mount,render,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArDisplay from '../../view/ArDisplay'

Enzyme.configure({ adapter: new Adapter() })

let extendedSubscribed = apply(three);

const Button = (props)=>(<a onClick={props.onClick} href="f">aarera</a>)
const RenderSigninForm = () => {
    const [isDisabled, setDisabled] = useState(false)
    return(<form>
      <Button  
        onClick={()=>setDisabled(true)}
        disabled={isDisabled}
      >Login</Button>
    </form>)
};

 describe('extend subscrib JSX', () => {
    it('test apply (three', () => {
        // extendedSubscribed = apply({Geometry:three.Geometry})
        expect(subscribe).toBeTruthy() 
        expect(three.Geometry).toBeTruthy() 
        expect(subscribe.geometry).toBeTruthy()

        
    });

    it('renders correctly_', () => {
        const tree = renderer
          .create(React.createElement('subscribe.geometry'))
          .toJSON();
        expect(tree).toMatchSnapshot();
        console.log(tree)
      });

        it('renders <subscribe.geometry />', () => {
          const tree = renderer.create(
            <subscribe.geometry />
          ).toJSON();
          expect(tree.type).toBe('geometry');
        });
      
        it('renders <subscribe.geometry /> with color', () => {
          const tree = renderer.create(
            <subscribe.geometry  fuck={'red'}/>
          ).toJSON();
          console.log(tree)
          expect(tree.props.fuck).toBe('red');
        });
      });
      
      
  })
 
