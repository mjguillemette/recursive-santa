import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import * as santa from './santa'

chai.use(sinonChai)

describe('Santa Claus', () => {
  it('recursively delivers presents', () => {
    let deliverPresentsSpy = sinon.spy(santa, 'deliverPresents')
    let consoleLogSpy = sinon.spy(console, 'log')

    santa.deliverPresents(['Rich', 'Peggy', 'David', 'Kevin', 'Will', 'Andrew', 'Christina'])

    expect(deliverPresentsSpy).to.have.callCount(13)

    expect(deliverPresentsSpy.getCall(0).args[0]).to.deep.equal(
      ['Rich', 'Peggy', 'David', 'Kevin', 'Will', 'Andrew', 'Christina'])

    expect(deliverPresentsSpy.getCall(1).args[0]).to.deep.equal(['Rich', 'Peggy', 'David'])
    expect(deliverPresentsSpy.getCall(2).args[0]).to.deep.equal(['Rich'])
    expect(deliverPresentsSpy.getCall(3).args[0]).to.deep.equal(['Peggy', 'David'])
    expect(deliverPresentsSpy.getCall(4).args[0]).to.deep.equal(['Peggy'])
    expect(deliverPresentsSpy.getCall(5).args[0]).to.deep.equal(['David'])
    expect(deliverPresentsSpy.getCall(6).args[0]).to.deep.equal(['Kevin', 'Will', 'Andrew', 'Christina'])
    expect(deliverPresentsSpy.getCall(7).args[0]).to.deep.equal(['Kevin', 'Will'])
    expect(deliverPresentsSpy.getCall(8).args[0]).to.deep.equal(['Kevin'])
    expect(deliverPresentsSpy.getCall(9).args[0]).to.deep.equal(['Will'])
    expect(deliverPresentsSpy.getCall(10).args[0]).to.deep.equal(['Andrew', 'Christina'])
    expect(deliverPresentsSpy.getCall(11).args[0]).to.deep.equal(['Andrew'])
    expect(deliverPresentsSpy.getCall(12).args[0]).to.deep.equal(['Christina'])

    expect(consoleLogSpy).to.have.callCount(7)

    expect(consoleLogSpy.getCall(0).args[0]).to.equal('Delivering presents to Rich')
    expect(consoleLogSpy.getCall(1).args[0]).to.equal('Delivering presents to Peggy')
    expect(consoleLogSpy.getCall(2).args[0]).to.equal('Delivering presents to David')
    expect(consoleLogSpy.getCall(3).args[0]).to.equal('Delivering presents to Kevin')
    expect(consoleLogSpy.getCall(4).args[0]).to.equal('Delivering presents to Will')
    expect(consoleLogSpy.getCall(5).args[0]).to.equal('Delivering presents to Andrew')
    expect(consoleLogSpy.getCall(6).args[0]).to.equal('Delivering presents to Christina')
  })
})
