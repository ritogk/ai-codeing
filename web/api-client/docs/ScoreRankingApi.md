# ScoreRankingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**scoreRankingControllerGetRanking**](#scorerankingcontrollergetranking) | **GET** /score/ranking | |

# **scoreRankingControllerGetRanking**
> scoreRankingControllerGetRanking()


### Example

```typescript
import {
    ScoreRankingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScoreRankingApi(configuration);

let timeLimitSec: number; // (default to undefined)

const { status, data } = await apiInstance.scoreRankingControllerGetRanking(
    timeLimitSec
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeLimitSec** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

