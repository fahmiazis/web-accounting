/* eslint-disable import/no-anonymous-default-export */
import http from '../../helpers/http'
import qs from 'qs'

export default {
    updateUploadDokumen: (token, id, data) => ({
        type: 'UPDATE_UPLOAD_DOKUMEN',
        payload: http(token).patch(`/dashboard/upload/edit/${id}`, data),
    }),
    getDashboard: (token, tipe) => ({
        type: 'GET_DASHBOARD',
        payload: http(token).get(`/dashboard/get?tipe=${tipe}`)
    }),
    nextDashboard: (token, link) => ({
        type: 'NEXT_DATA',
        payload: http(token).get(`${link}`)
    }),
    getDashboardPic: (token, tipe, time, search, limit) => ({
        type: 'GET_DASHBOARD_PIC',
        payload: http(token).get(`/dashboard/get?tipe=${tipe}&time=${time}&find=${search}&limit=${limit}`)
    }),
    getActivity: (token, search) => ({
        type: 'GET_ACTIVITY',
        payload: http(token).get(`/dashboard/activity?search=${search}`)
    }),
    getAllActivity: (token, search, limit, tipe) => ({
        type: 'GET_ALL_ACTIVITY',
        payload: http(token).get(`/dashboard/active?tipe=${tipe}&find=${search}&limit=${limit}`)
    }),
    uploadDokumen: (token, id, time, data) => ({
        type: 'UPLOAD_DOKUMEN',
        payload: http(token).post(`/dashboard/upload/${id}/${time}`, data)
    }),
    approve: (token, id, idAct) => ({
        type: 'APPROVE',
        payload: http(token).patch(`/dashboard/approve/${id}/${idAct}`)
    }),
    reject: (token, id, idAct, data) => ({
        type: 'REJECT',
        payload: http(token).patch(`/dashboard/reject/${id}/${idAct}`, qs.stringify(data))
    }),
    showDokumen: (token, id) => ({
        type: 'SHOW',
        payload: http(token).get(`/show/get/${id}`)
    }),
    sendEmail: (token, id) => ({
        type: 'SEND',
        payload: http(token).post(`/dashboard/send/${id}`)
    }),
    download: (data) => ({
        type: 'DOWNLOAD',
        payload: http().get(`/uploads/${data}`)
    }),
    report: (token, fr, to, data) => ({
        type: 'REPORT',
        payload: http(token).post(`/dashboard/report?from=${fr}&to=${to}`, qs.stringify(data))
    }),
    downloadReport: (link) => ({
        type: 'DOWNLOAD_REPORT',
        payload: http().get(link)
    }),
    editAccessActive: (token, id, data) => ({
        type:'EDIT_ACCESS',
        payload: http(token).patch(`/dashboard/edit/${id}`, qs.stringify(data))
    }),
    resetError: () => ({
        type: 'RESET'
    }),
    resetErrorReport: () => ({
        type: 'RESET_REPORT'
    }),
    getNotif: (token) => ({
        type: 'GET_NOTIF',
        payload: http(token).get(`/dashboard/notif`)
    }),
    getNotifArea: (token) => ({
        type: 'GET_NOTIF_AREA',
        payload: http(token).get(`/dashboard/notif`)
    })
}